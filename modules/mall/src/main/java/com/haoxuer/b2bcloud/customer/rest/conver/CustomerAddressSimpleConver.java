package com.haoxuer.b2bcloud.customer.rest.conver;

import com.haoxuer.b2bcloud.customer.api.domain.simple.AddressSimple;
import com.haoxuer.b2bcloud.customer.api.domain.simple.CustomerAddressSimple;
import com.haoxuer.b2bcloud.customer.data.entity.CustomerAddress;
import com.haoxuer.discover.data.rest.core.Conver;

public class CustomerAddressSimpleConver implements Conver<CustomerAddressSimple, CustomerAddress> {
    @Override
    public CustomerAddressSimple conver(CustomerAddress source) {
        CustomerAddressSimple result = new CustomerAddressSimple();
        result.setId(source.getId());
        result.setAddress(source.getAddress());
        result.setName(source.getName());
        result.setNote(source.getNote());
        result.setCode(source.getCode());
        result.setLat(source.getLat());
        result.setLng(source.getLng());
        result.setPhone(source.getPhone());
        result.setTel(source.getTel());

        if (result.getName() == null) {
            result.setName("");
        }
        if (result.getPhone() == null) {
            result.setPhone("");
        }
        if (result.getAddress() == null) {
            result.setAddress("");
        }
        if (source.getCustomer() != null) {
            if (source.getCustomer().getAddressId() == source.getId()) {
                result.setDefaultState(true);
            }
        }
        return result;
    }
}
