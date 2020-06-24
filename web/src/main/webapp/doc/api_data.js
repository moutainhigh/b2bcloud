define({ "api": [
  {
    "type": "get",
    "url": "/rest/ad/position.htm",
    "title": "1.03 获取某个类型的广告",
    "version": "0.0.1",
    "name": "ad.position",
    "group": "1user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(2)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>类型id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取某个类型的广告</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          }
        ]
      }
    },
    "filename": "./1user.js",
    "groupTitle": "1.0 用户模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/ad/position.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/customer/create.htm",
    "title": "1.05 用户注册",
    "version": "0.0.1",
    "name": "customer.create",
    "group": "1user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop",
            "description": "<p>经销商名称</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>用户注册</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      }
    },
    "filename": "./1user.js",
    "groupTitle": "1.0 用户模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/customer/create.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/saas_user/findOpenId.htm",
    "title": "1.04 获取openId",
    "version": "0.0.1",
    "name": "findOpenId",
    "group": "1user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>第三方类型(wxapp为小程序登录)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>第三方code</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取openId</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openId",
            "description": "<p>用户的openId</p>"
          }
        ]
      }
    },
    "filename": "./1user.js",
    "groupTitle": "1.0 用户模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/saas_user/findOpenId.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/saas_user/login.htm",
    "title": "1.01 登录接口",
    "version": "0.0.1",
    "name": "login",
    "group": "1user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>登录接口</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "filename": "./1user.js",
    "groupTitle": "1.0 用户模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/saas_user/login.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/saas_user/updatePassword.htm",
    "title": "1.02 更新密码",
    "version": "0.0.1",
    "name": "updatePassword",
    "group": "1user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>老密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>更新密码</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          }
        ]
      }
    },
    "filename": "./1user.js",
    "groupTitle": "1.0 用户模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/saas_user/updatePassword.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/product/search.htm",
    "title": "2.02 产品搜索功能",
    "version": "0.0.1",
    "name": "product.search",
    "group": "2product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "no",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>大小</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "brand",
            "description": "<p>品牌id</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "catalog",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "label",
            "description": "<p>标签id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>产品搜索功能</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.barCode",
            "description": "<p>条形码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.catalog",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.salePrice",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.marketPrice",
            "description": "<p>市场价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.logo",
            "description": "<p>图片</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.unit",
            "description": "<p>单位</p>"
          }
        ]
      }
    },
    "filename": "./2product.js",
    "groupTitle": "2.0 产品模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/product/search.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/productcatalog/list.htm",
    "title": "2.01 获取产品的所有分类",
    "version": "0.0.1",
    "name": "productcatalog.list",
    "group": "2product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>登录接口</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.children",
            "description": "<p>子分类集合</p>"
          }
        ]
      }
    },
    "filename": "./2product.js",
    "groupTitle": "2.0 产品模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/productcatalog/list.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/ordertrade/searchByUser.htm",
    "title": "3.04 订货会订单",
    "version": "0.0.1",
    "name": "ordertrade.searchByUser",
    "group": "3promote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "no",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payState",
            "description": "<p>订单支付状态  wait等待支付 success 支付成功</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>订货会订单</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>产品集合</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.no",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.promote",
            "description": "<p>订货会名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.payState",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.customer",
            "description": "<p>下单人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.money",
            "description": "<p>订单总价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.payMoney",
            "description": "<p>实际付款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.productCount",
            "description": "<p>下单数量</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items",
            "description": "<p>下单商品</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items.id",
            "description": "<p>下单商品id</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items.name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items.logo",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items.size",
            "description": "<p>商品购买数量</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items.useNum",
            "description": "<p>商品使用数量</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items.price",
            "description": "<p>商品锁定单价</p>"
          }
        ]
      }
    },
    "filename": "./3promote.js",
    "groupTitle": "3.0 订货会模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/ordertrade/searchByUser.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/promote/list.htm",
    "title": "3.01 获取进行中的订货会",
    "version": "0.0.1",
    "name": "promote.list",
    "group": "3promote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取进行中的订货会</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.id",
            "description": "<p>订货会id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>订货会名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.logo",
            "description": "<p>订货会图片</p>"
          }
        ]
      }
    },
    "filename": "./3promote.js",
    "groupTitle": "3.0 订货会模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/promote/list.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/ordertrade/delete.htm",
    "title": "3.06 取消订货单订单",
    "version": "0.0.1",
    "name": "promoteproduct.delete",
    "group": "3promote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "id",
            "description": "<p>订单</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>取消订货单订单</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          }
        ]
      }
    },
    "filename": "./3promote.js",
    "groupTitle": "3.0 订货会模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/ordertrade/delete.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/promoteproduct/list.htm",
    "title": "3.02 某个订货会中的商品",
    "version": "0.0.1",
    "name": "promoteproduct.list",
    "group": "3promote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "promote",
            "description": "<p>订货会id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>某个订货会中的商品</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "mini",
            "description": "<p>订货会起订量</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "scale",
            "description": "<p>付款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>产品集合</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.barCode",
            "description": "<p>条形码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.catalog",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.salePrice",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.marketPrice",
            "description": "<p>市场价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.logo",
            "description": "<p>图片</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.unit",
            "description": "<p>单位</p>"
          }
        ]
      }
    },
    "filename": "./3promote.js",
    "groupTitle": "3.0 订货会模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/promoteproduct/list.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/ordertrade/order.htm",
    "title": "3.03 订货会下单接口传递json",
    "version": "0.0.1",
    "name": "promoteproduct.order",
    "group": "3promote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "items",
            "description": "<p>商品数组</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "items.id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "items.num",
            "description": "<p>购买数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"items\":{\"id\":15,\"num\":10}\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>订货会下单接口传递json</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          }
        ]
      }
    },
    "filename": "./3promote.js",
    "groupTitle": "3.0 订货会模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/ordertrade/order.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/ordertrade/rePay.htm",
    "title": "3.05 重新支付该订单",
    "version": "0.0.1",
    "name": "promoteproduct.rePay",
    "group": "3promote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "id",
            "description": "<p>订单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openId",
            "description": "<p>微信openId</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>重新支付该订单</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          }
        ]
      }
    },
    "filename": "./3promote.js",
    "groupTitle": "3.0 订货会模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/ordertrade/rePay.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/orderdata/orderData.htm",
    "title": "4.03 下单传递json",
    "version": "0.0.1",
    "name": "orderdata.orderData",
    "group": "4shopcart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "items",
            "description": "<p>商品数组</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "items.id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "items.num",
            "description": "<p>购买数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"items\":{\"id\":15,\"num\":10}\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>下单传递json</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "logo",
            "description": "<p>图片</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "size",
            "description": "<p>数量</p>"
          }
        ]
      }
    },
    "filename": "./4shopcart.js",
    "groupTitle": "4.0 购物车模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/orderdata/orderData.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/orderdata/search.htm",
    "title": "4.04 订单列表",
    "version": "0.0.1",
    "name": "orderdata.search",
    "group": "4shopcart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "no",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payState",
            "description": "<p>订单支付状态  wait等待支付 success 支付成功</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>添加商品到购物车中</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.payState",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.customer",
            "description": "<p>下单人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.money",
            "description": "<p>订单总价</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.payMoney",
            "description": "<p>实际付款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.productCount",
            "description": "<p>下单数量</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list.items",
            "description": "<p>下单商品</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "list.items.id",
            "description": "<p>下单商品id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.items.name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.items.logo",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.items.size",
            "description": "<p>商品购买数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.items.useNum",
            "description": "<p>商品使用数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.items.surplusNum",
            "description": "<p>剩余数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.items.returnNum",
            "description": "<p>退货数量</p>"
          }
        ]
      }
    },
    "filename": "./4shopcart.js",
    "groupTitle": "4.0 购物车模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/orderdata/search.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/orderdata/temps.htm",
    "title": "4.05 理货车中商品",
    "version": "0.0.1",
    "name": "orderdata.temps",
    "group": "4shopcart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>理货车中商品</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>集合</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "list.id",
            "description": "<p>理货id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.logo",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "list.product",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "list.price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.num",
            "description": "<p>商品购买数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.surplusNum",
            "description": "<p>商品剩余数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.items.useNum",
            "description": "<p>商品使用数量</p>"
          }
        ]
      }
    },
    "filename": "./4shopcart.js",
    "groupTitle": "4.0 购物车模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/orderdata/temps.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/ordertally/create.htm",
    "title": "4.06 理货车中理货传json",
    "version": "0.0.1",
    "name": "ordertally.create",
    "group": "4shopcart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"items\":{\"id\":15,\"num\":10}\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>理货车中理货</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          }
        ]
      }
    },
    "filename": "./4shopcart.js",
    "groupTitle": "4.0 购物车模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/ordertally/create.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/shopcartitem/create.htm",
    "title": "4.02 添加商品到购物车中",
    "version": "0.0.1",
    "name": "shopcartitem.create",
    "group": "4shopcart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>数量</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>添加商品到购物车中</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "logo",
            "description": "<p>图片</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "size",
            "description": "<p>数量</p>"
          }
        ]
      }
    },
    "filename": "./4shopcart.js",
    "groupTitle": "4.0 购物车模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/shopcartitem/create.htm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/rest/shopcartitem/list.htm",
    "title": "4.01 获取购物车里面的数据",
    "version": "0.0.1",
    "name": "shopcartitem.list",
    "group": "4shopcart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>平台id(3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取进行中的订货会</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.id",
            "description": "<p>购物车id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.product",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.size",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "list.price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>订货会名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.logo",
            "description": "<p>订货会图片</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.trade",
            "description": "<p>是否启用订货会商品</p>"
          }
        ]
      }
    },
    "filename": "./4shopcart.js",
    "groupTitle": "4.0 购物车模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/shopcartitem/list.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/financeAccount/accounts.htm",
    "title": "5.01 获取账户信息",
    "version": "0.0.1",
    "name": "accounts",
    "group": "5finance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取账户信息</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          }
        ]
      }
    },
    "filename": "./5finance.js",
    "groupTitle": "5.0 财务模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/financeAccount/accounts.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/cash/recharge.htm",
    "title": "5.03 充值",
    "version": "0.0.1",
    "name": "recharge",
    "group": "5finance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "tenant",
            "description": "<p>租户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "money",
            "description": "<p>充值金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openId",
            "description": "<p>微信openId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payType",
            "description": "<p>支付插件wxapp</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>充值</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          }
        ]
      }
    },
    "filename": "./5finance.js",
    "groupTitle": "5.0 财务模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/cash/recharge.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/financeAccount/stream.htm",
    "title": "5.02 资金流水",
    "version": "0.0.1",
    "name": "stream",
    "group": "5finance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "id",
            "description": "<p>账号id</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "beginDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "endDate",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "no",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>资金流水</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          }
        ]
      }
    },
    "filename": "./5finance.js",
    "groupTitle": "5.0 财务模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/financeAccount/stream.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/address/add.htm",
    "title": "6.02 添加地址",
    "version": "0.0.1",
    "name": "add",
    "group": "6address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "name",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tel",
            "description": "<p>座机</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lat",
            "description": "<p>维度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>邮政编码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "defaultState",
            "description": "<p>是否默认 1(是) 0(不是)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>添加地址</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          }
        ]
      }
    },
    "filename": "./6address.js",
    "groupTitle": "6.0 地址模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/address/add.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/address/delete.htm",
    "title": "6.04 删除地址",
    "version": "0.0.1",
    "name": "delete",
    "group": "6address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>地址id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>删除地址</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          }
        ]
      }
    },
    "filename": "./6address.js",
    "groupTitle": "6.0 地址模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/address/delete.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/address/info.htm",
    "title": "6.04 获取用户的默认地址",
    "version": "0.0.1",
    "name": "delete",
    "group": "6address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取用户的默认地址</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "name",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tel",
            "description": "<p>座机</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "lat",
            "description": "<p>维度</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "./6address.js",
    "groupTitle": "6.0 地址模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/address/info.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/address/page.htm",
    "title": "6.01 获取用户的地址",
    "version": "0.0.1",
    "name": "page",
    "group": "6address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "no",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>大小</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取用户的地址</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          },
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          }
        ]
      }
    },
    "filename": "./6address.js",
    "groupTitle": "6.0 地址模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/address/page.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/address/update.htm",
    "title": "6.03 更新地址",
    "version": "0.0.1",
    "name": "update",
    "group": "6address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "name",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tel",
            "description": "<p>座机</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lat",
            "description": "<p>维度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>邮政编码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "defaultState",
            "description": "<p>是否默认 1(是) 0(不是)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>更新地址</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          }
        ]
      }
    },
    "filename": "./6address.js",
    "groupTitle": "6.0 地址模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/address/update.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/orderrefund/create.htm",
    "title": "7.01 创建退货单",
    "version": "0.0.1",
    "name": "orderrefund.create",
    "group": "7orderrefund",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"items\":{\"id\":15,\"num\":10},\n   orderId:\"\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>创建退货单</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          }
        ]
      }
    },
    "filename": "./7orderrefund.js",
    "groupTitle": "7.0 退货模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/orderrefund/create.htm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/rest/orderrefund/search.htm",
    "title": "7.02 退货单搜索",
    "version": "0.0.1",
    "name": "search",
    "group": "7orderrefund",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auditState",
            "description": "<p>init审核中,success审核成功,fail审核失败</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "no",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>大小</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tenant",
            "description": "<p>tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户令牌</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>退货单搜索</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码(默认为0)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>状态消息</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>退货项id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.logo",
            "description": "<p>商品logo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.num",
            "description": "<p>退货数量</p>"
          }
        ]
      }
    },
    "filename": "./7orderrefund.js",
    "groupTitle": "7.0 退货模块",
    "sampleRequest": [
      {
        "url": "https://cloud.demomall.cn/b2b/rest/orderrefund/search.htm"
      }
    ]
  }
] });
