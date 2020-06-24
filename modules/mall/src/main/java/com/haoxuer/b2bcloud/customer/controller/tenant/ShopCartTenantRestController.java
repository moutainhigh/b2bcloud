package com.haoxuer.b2bcloud.customer.controller.tenant;

import com.haoxuer.b2bcloud.customer.api.apis.ShopCartApi;
import com.haoxuer.b2bcloud.customer.api.domain.list.ShopCartList;
import com.haoxuer.b2bcloud.customer.api.domain.page.ShopCartPage;
import com.haoxuer.b2bcloud.customer.api.domain.request.*;
import com.haoxuer.b2bcloud.customer.api.domain.response.ShopCartResponse;
import com.haoxuer.bigworld.member.api.domain.request.TenantPageRequest;
import com.haoxuer.bigworld.member.api.domain.request.TenantRequest;
import com.haoxuer.bigworld.tenant.data.entity.Tenant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.haoxuer.bigworld.member.controller.tenant.BaseTenantRestController;
import com.haoxuer.bigworld.member.api.domain.request.ViewRequest;

@RequestMapping("/tenantRest/shopcart")
@RestController
public class ShopCartTenantRestController extends BaseTenantRestController {


    @RequestMapping("create")
    public ShopCartResponse create(ShopCartCreateRequest request) {
        initTenant(request);
        return api.create(request);
    }

    @RequestMapping("update")
    public ShopCartResponse update(ShopCartUpdateRequest request) {
        initTenant(request);
        return api.update(request);
    }

    @RequestMapping("delete")
    public ShopCartResponse delete(ShopCartViewRequest request) {
        initTenant(request);
        return api.delete(request);
    }

    @RequestMapping("list")
    public ShopCartList list(ShopCartListRequest request) {
        initTenant(request);
        return api.list(request);
    }

    @RequestMapping("search")
    public ShopCartPage search(ShopCartSearchRequest request) {
        initTenant(request);
        return api.search(request);
    }

    @RequestMapping("view")
    public ShopCartResponse view(ShopCartViewRequest request) {
        initTenant(request);
        return api.view(request);
    }

    @Autowired
    private ShopCartApi api;

}
