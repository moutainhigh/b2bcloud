package com.haoxuer.b2bcloud.order.data.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.haoxuer.discover.data.core.Updater;
import com.haoxuer.b2bcloud.order.data.dao.OrderTallyDao;
import com.haoxuer.b2bcloud.order.data.entity.OrderTally;
import com.haoxuer.b2bcloud.order.data.service.OrderTallyService;

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
* Created by imake on 2020年06月04日16:56:41.
*/


@Scope("prototype")
@Service
@Transactional
public class OrderTallyServiceImpl implements OrderTallyService {

	private OrderTallyDao dao;


	@Override
	@Transactional(readOnly = true)
	public OrderTally findById(Long id) {
		return dao.findById(id);
	}


	@Override
    @Transactional
	public OrderTally save(OrderTally bean) {
		dao.save(bean);
		return bean;
	}

	@Override
    @Transactional
	public OrderTally update(OrderTally bean) {
		Updater<OrderTally> updater = new Updater<OrderTally>(bean);
		return dao.updateByUpdater(updater);
	}

	@Override
    @Transactional
	public OrderTally deleteById(Long id) {
		OrderTally bean = dao.findById(id);
        dao.deleteById(id);
		return bean;
	}

	@Override
    @Transactional	
	public OrderTally[] deleteByIds(Long[] ids) {
		OrderTally[] beans = new OrderTally[ids.length];
		for (int i = 0,len = ids.length; i < len; i++) {
			beans[i] = deleteById(ids[i]);
		}
		return beans;
	}


	@Autowired
	public void setDao(OrderTallyDao dao) {
		this.dao = dao;
	}

	@Override
    public Page<OrderTally> page(Pageable pageable){
         return dao.page(pageable);
    }


    @Override
	public Page<OrderTally> page(Pageable pageable, Object search) {
		List<Filter> filters=	FilterUtils.getFilters(search);
		if (filters!=null) {
			pageable.getFilters().addAll(filters);
		}
		return dao.page(pageable);
	}

    @Override
    public List<OrderTally> list(int first, Integer size, List<Filter> filters, List<Order> orders) {
        return dao.list(first,size,filters,orders);}

    @Override
    public OrderTally findById(Long tenant, Long id) {
        return dao.findById(tenant, id);
    }

    @Override
    public OrderTally deleteById(Long tenant, Long id) {
        return dao.deleteById(tenant, id);
    }
}