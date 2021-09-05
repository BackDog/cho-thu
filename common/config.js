const config = {
	author: "Canh Nguyen",
	environment: "DEV",
	version: "1.0",
	database: {
		uriMongodb: "mongodb+srv://admin:db11112222@rabbitcluster.jjait.mongodb.net/",
		cluster: "rabbitcluster.jjait.mongodb.net",
		username: "admin",
		password: "db11112222",
		databaseName: "'cho-thu-db"
	},
	data: {
		menu: [
    		{
    			id: 1,
		    	name: "Trang chủ",
		    	description: "Trang chủ",
		    	path: "guild",
		    	icon: "home",
		    	active: true
		    },
		    {
		    	id: 2,
		    	name: "Phường",
		    	description: "Trang chủ quản lý phường",
		    	path: "guild",
		    	icon: "map-marker",
		    	active: false
		    },
		    {
		    	id: 3,
		    	name: "Người dùng",
		    	description: "Trang quản lý người dùng",
		    	path: "user",
		    	icon: "user",
		    	active: false
		    },
		    {
		    	id: 4,
		    	name: "Hàng hóa",
		    	description: "Trang quản lý hàng hóa",
		    	path: "product",
		    	icon: "cube",
		    	active: false
		    },
		    {
		    	id: 5,
		    	name: "Đơn vị",
		    	description: "Trang quản lý đơn vị",
		    	path: "unit",
		    	icon: "cube",
		    	active: false
		    },
		    {
		    	id: 6,
		    	name: "Báo cáo",
		    	description: "Trang quản lý báo cáo",
		    	path: "report",
		    	icon: "clipboard",active: false
		    }
  		],
  		role: [
  			{
  				id: 1
  			}
  		],
  		guild: {
		    title : "Phường",
		    code : "guild",
		    rows : [],
		   	headers : [
		   		{icon:"flag", title: "STT"}, 
		   		{icon:"map-marker", title: "Tên phường"}, 
		   		{icon:"map", title: "Địa chỉ"},
		   		{icon:"phone", title: "Số điện thoại"},
		   		{icon:"address-card", title: "Tài khoản"}],
		    action : [
		    	{icon:"edit", title: "Thông tin", class:"primary", action: "update", actionTitle: "Cập nhật"},
		    	{icon:"clipboard", title: "Báo cáo", class:"primary", action: "report", actionTitle: "Báo cáo"},
		    	{icon:"list", title: "Khu phố", class:"primary", action: "town", actionTitle: "Khu phố"},
		    	{icon:"ban", title: "Xóa", class:"danger" , action: "remove", actionTitle: "Xóa"}
		    ],
		    fields : [
		    	{title: "Tên phường"   , element: "input", type: "text", nameObj: "name"},
		    	{title: "Địa chỉ", element: "input", type: "text", nameObj: "address"},
		    	{title: "Số điện thoại", element: "input", type: "text", nameObj: "phone"},
		    	{title: "Danh sách khu phố", element: "input", type: "text", nameObj: "towns", hidden: true},
		    	{title: "Tài khoản", element: "input", type: "text", nameObj: "username"},
		    	{title: "Mật khẩu", element: "input", type: "password", nameObj: "password", hidden: true}
		    ]
	    },
	    town: {
		    title : "Khu phố",
		    code : "town",
		    rows : [],
		   	headers : [{icon:"flag", title: "STT"}, {icon:"", title: "Tên"}, {icon:"", title: "Số khu phố"}],
		    action : [
		    	{icon:"edit", title: "Chỉnh sửa", class:"primary", action: "update", actionTitle: "Cập nhật"},
		    	{icon:"ban" , title: "Xóa"      , class:"danger" , action: "remove", actionTitle: "Xóa"     }
		    ],
		    fields : [
		    	{title: "Tên", element: "input", type: "text", nameObj: "name"},
		    	{title: "Số khu phố", element: "input", type: "text", nameObj: "number"}
		    ]
	    },
	    user: {
		    title : "Người dùng",
		    code : "user",
		    rows : [],
		   	headers : [
		   		{icon:"flag", title: "STT"}, 
		   		{icon:"", title: "Họ và tên"}, 
		   		{icon:"map", title: "Địa chỉ"},
		   		{icon:"phone", title: "Số điện thoại"},
		   		{icon:"", title: "Phường"},
		   		{icon:"", title: "Khu phố"}],
		    action : [
		    	{icon:"edit", title: "Thông tin", class:"primary", action: "update", actionTitle: "Cập nhật"},
		    	{icon:"ban", title: "Xóa"     , class:"danger", action: "remove", actionTitle: "Xóa"     }
		    ],
		    fields : [
		    	{title: "Họ và tên"   , element: "input", type: "text", nameObj: "name"},
		    	{title: "Địa chỉ", element: "input", type: "text", nameObj: "address"},
		    	{title: "Số điện thoại", element: "input", type: "text", nameObj: "phone"},
		    	{title: "Phường", element: "select", type: "text", nameObj: "id_guild", data: 'guild'},
		    	{title: "Khu phố", element: "select", type: "text", nameObj: "id_town", data: 'town'},
		    	{title: "Mật khẩu", element: "input", type: "password", nameObj: "password", hidden: true}
		    ]
	    },
	    product: {
		    title : "Hàng Hóa",
		    code : "product",
		    rows : [],
		   	headers : [
		   		{icon:"flag", title: "STT"}, 
		   		{icon:"", title: "Tên"}, 
		   		{icon:"", title: "Hình ảnh"},
		   		{icon:"", title: "Giá"},
		   		{icon:"", title: "Số lượng tối thiểu"},
		   		{icon:"", title: "Số lượng tối đa"},
		   		{icon:"", title: "Đơn vị"},],
		    action : [
		    	{icon:"edit", title: "Chỉnh sửa", class:"primary", action: "update", actionTitle: "Cập nhật"},
		    	{icon:"ban", title: "Xóa"     , class:"danger", action: "remove", actionTitle: "Xóa"     }
		    ],
		    fields : [
		    	{title: "Tên"   , element: "input", type: "text", nameObj: "name"},
		    	{title: "Hình ảnh", element: "input", type: "text", nameObj: "image"},
		    	{title: "Giá", element: "input", type: "number", nameObj: "price"},
		    	{title: "Số lượng tối thiểu", element: "input", type: "number", nameObj: "min_number"},
		    	{title: "Số lượng tối đa", element: "input", type: "number", nameObj: "max_number"},
		    	{title: "Đơn vị", element: "select", type: "text", nameObj: "unit", data: 'unit'}
		    ]
	    },
	    unit: {
		    title : "Đơn vị",
		    code : "unit",
		    rows : [],
		   	headers : [{icon:"flag", title: "STT"}, {icon:"", title: "Tên"}, {icon:"", title: "Ký hiệu"}],
		    action : [
		    	{icon:"edit", title: "Chỉnh sửa", class:"primary", action: "update", actionTitle: "Cập nhật"},
		    	{icon:"ban" , title: "Xóa"      , class:"danger" , action: "remove", actionTitle: "Xóa"     }
		    ],
		    fields : [
		    	{title: "Tên", element: "input", type: "text", nameObj: "name"},
		    	{title: "Đơn vị", element: "input", type: "text", nameObj: "unit"}
		    ]
	    }
	}
}

module.exports = { config };