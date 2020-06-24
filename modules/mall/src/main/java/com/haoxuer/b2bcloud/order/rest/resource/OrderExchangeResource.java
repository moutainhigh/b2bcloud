package com.haoxuer.b2bcloud.order.rest.resource;

import com.haoxuer.b2bcloud.order.api.apis.OrderExchangeApi;
import com.haoxuer.b2bcloud.order.api.domain.list.OrderExchangeList;
import com.haoxuer.b2bcloud.order.api.domain.page.OrderExchangePage;
import com.haoxuer.b2bcloud.order.api.domain.request.*;
import com.haoxuer.b2bcloud.order.api.domain.response.OrderExchangeResponse;
import com.haoxuer.b2bcloud.order.data.dao.OrderExchangeDao;
import com.haoxuer.b2bcloud.order.data.entity.OrderExchange;
import com.haoxuer.b2bcloud.order.rest.conver.OrderExchangeResponseConver;
import com.haoxuer.b2bcloud.order.rest.conver.OrderExchangeSimpleConver;
import com.haoxuer.bigworld.member.api.domain.request.ViewRequest;
import com.haoxuer.bigworld.tenant.data.entity.Tenant;
import com.haoxuer.discover.config.utils.ConverResourceUtils;
import com.haoxuer.discover.data.page.Filter;
import com.haoxuer.discover.data.page.Order;
import com.haoxuer.discover.data.page.Page;
import com.haoxuer.discover.data.page.Pageable;
import com.haoxuer.discover.data.utils.FilterUtils;
import jodd.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import com.haoxuer.bigworld.member.rest.conver.PageableConver;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Component
public class OrderExchangeResource implements OrderExchangeApi {

    @Autowired
    private OrderExchangeDao dataDao;

    @Override
    public OrderExchangeResponse create(OrderExchangeCreateRequest request) {
        OrderExchangeResponse result = new OrderExchangeResponse();

        OrderExchange bean = new OrderExchange();
        bean.setTenant(Tenant.fromId(request.getTenant()));
        handleData(request, bean);
        dataDao.save(bean);
        result = new OrderExchangeResponseConver().conver(bean);
        return result;
    }

    @Override
    public OrderExchangeResponse update(OrderExchangeUpdateRequest request) {
        OrderExchangeResponse result = new OrderExchangeResponse();
        if (request.getId() == null) {
            result.setCode(501);
            result.setMsg("无效id");
            return result;
        }
        OrderExchange bean = dataDao.findById(request.getId());
        if (bean == null) {
            result.setCode(502);
            result.setMsg("无效id");
            return result;
        }
        handleData(request, bean);
        result = new OrderExchangeResponseConver().conver(bean);
        return result;
    }

    private void handleData(OrderExchangeCreateRequest request, OrderExchange bean) {
        bean.setNo(request.getNo());
        bean.setName(request.getName());
        bean.setState(request.getState());
    }

    @Override
    public OrderExchangeResponse delete(OrderExchangeViewRequest request) {
        OrderExchangeResponse result = new OrderExchangeResponse();
        if (request.getId() == null) {
            result.setCode(501);
            result.setMsg("无效id");
            return result;
        }
        dataDao.deleteById(request.getTenant(),request.getId());
        return result;
    }

    @Override
    public OrderExchangeResponse view(OrderExchangeViewRequest request) {
        OrderExchangeResponse result=new OrderExchangeResponse();
        OrderExchange bean = dataDao.findById(request.getTenant(), request.getId());
        if (bean==null){
            result.setCode(1000);
            result.setMsg("无效id");
            return result;
        }
        result=new OrderExchangeResponseConver().conver(bean);
        return result;
    }
    @Override
    public OrderExchangeList list(OrderExchangeListRequest request) {
        OrderExchangeList result = new OrderExchangeList();

        List<Filter> filters = new ArrayList<>();
        filters.add(Filter.eq("tenant.id", request.getTenant()));
        filters.addAll(FilterUtils.getFilters(request));
        List<Order> orders = new ArrayList<>();
        orders.add(Order.asc(" sortNum"));
        List<OrderExchange> organizations = dataDao.list(0, 100, filters, orders);
        ConverResourceUtils.converList(result, organizations, new OrderExchangeSimpleConver());
        return result;
    }

    @Override
    public OrderExchangePage search(OrderExchangeSearchRequest request) {
        OrderExchangePage result=new OrderExchangePage();
        Pageable pageable = new PageableConver().conver(request);
        pageable.getFilters().addAll(FilterUtils.getFilters(request));
        pageable.getFilters().add(Filter.eq("tenant.id", request.getTenant()));
        pageable.getOrders().add(Order.desc("id"));
        Page<OrderExchange> page=dataDao.page(pageable);
        ConverResourceUtils.converPage(result,page,new OrderExchangeSimpleConver());
        return result;
    }
}
