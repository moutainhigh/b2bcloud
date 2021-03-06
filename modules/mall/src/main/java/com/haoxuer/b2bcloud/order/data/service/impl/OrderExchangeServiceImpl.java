package com.haoxuer.b2bcloud.order.data.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.haoxuer.discover.data.core.Updater;
import com.haoxuer.b2bcloud.order.data.dao.OrderExchangeDao;
import com.haoxuer.b2bcloud.order.data.entity.OrderExchange;
import com.haoxuer.b2bcloud.order.data.service.OrderExchangeService;

import com.haoxuer.discover.data.page.Filter;
import com.haoxuer.discover.data.page.Order;
import com.haoxuer.discover.data.page.Page;
import com.haoxuer.discover.data.page.Pageable;
import java.util.List;
import java.util.LinkedList;
import java.util.ArrayList;
import com.haoxuer.discover.data.utils.FilterUtils;
import org.springframework.context.annotation.Scope;


/**
* Created by imake on 2020年05月12日18:42:45.
*/


@Scope("prototype")
@Service
@Transactional
public class OrderExchangeServiceImpl implements OrderExchangeService {

	private OrderExchangeDao dao;


	@Override
	@Transactional(readOnly = true)
	public OrderExchange findById(Long id) {
		return dao.findById(id);
	}


	@Override
    @Transactional
	public OrderExchange save(OrderExchange bean) {
		dao.save(bean);
		return bean;
	}

	@Override
    @Transactional
	public OrderExchange update(OrderExchange bean) {
		Updater<OrderExchange> updater = new Updater<OrderExchange>(bean);
		return dao.updateByUpdater(updater);
	}

	@Override
    @Transactional
	public OrderExchange deleteById(Long id) {
		OrderExchange bean = dao.findById(id);
        dao.deleteById(id);
		return bean;
	}

	@Override
    @Transactional	
	public OrderExchange[] deleteByIds(Long[] ids) {
		OrderExchange[] beans = new OrderExchange[ids.length];
		for (int i = 0,len = ids.length; i < len; i++) {
			beans[i] = deleteById(ids[i]);
		}
		return beans;
	}


	@Autowired
	public void setDao(OrderExchangeDao dao) {
		this.dao = dao;
	}

	@Override
    public Page<OrderExchange> page(Pageable pageable){
         return dao.page(pageable);
    }


    @Override
	public Page<OrderExchange> page(Pageable pageable, Object search) {
		List<Filter> filters=	FilterUtils.getFilters(search);
		if (filters!=null) {
			pageable.getFilters().addAll(filters);
		}
		return dao.page(pageable);
	}

    @Override
    public List<OrderExchange> list(int first, Integer size, List<Filter> filters, List<Order> orders) {
        return dao.list(first,size,filters,orders);}

    @Override
    public OrderExchange findById(Long tenant, Long id) {
        return dao.findById(tenant, id);
    }

    @Override
    public OrderExchange deleteById(Long tenant, Long id) {
        return dao.deleteById(tenant, id);
    }
}