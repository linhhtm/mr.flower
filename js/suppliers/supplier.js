//generate datatables
let suppliers = [];
let orders = [];
for (let i=0;i <50;i++){
    suppliers.push(
        {
            'id': faker.random.number(),
            'name': faker.name.findName(),
            'phone': faker.phone.phoneNumber(),
            'address': faker.address.zipCode(),
            'manager_name': faker.name.findName(),
            'memo': 'Ullamcompoer..',
            'orders': Math.floor(Math.random() * 100),
            'last_order_date': moment(faker.date.past()).format('DD/MM/YYYY'),
        },
    )
    orders.push(
        {
            'id': faker.random.number(),
            'product_code': [randomCharacters(2) + Math.floor(Math.random() * 999) + ', ' + randomCharacters(2) + Math.floor(Math.random() * 999) ],
            'product_name': 'Rose',
            'product_qty': faker.random.number(),
            'price':  Math.floor(Math.random() * 100000000),
            'order_date': moment(faker.date.past()).format('DD/MM/YYYY'),
        },
    )
}

let suppliersColumns = [
    {
        data: null,
        width:0,
        orderable:false,
        className:'row-detail p-0 pl-3',
        defaultContent:'',
    },
    {
        data: 'id',
    },
    {
        data: 'name',
    },
    {
        data: 'phone',
    },
    {
        data: 'address',
    },
    {
        data: 'manager_name',
    },
    {
        data: 'memo',
    },
    {
        data: 'orders',
        render:function(data,type,row){
            return formatNumber(data) + ' times';
        }
    },
    {
        data: 'last_order_date',
    },
]
let ordersColumns = [
    {
        data: null,
        width:0,
        orderable:false,
        className:'row-detail p-0 pl-3',
        defaultContent:'',
    },
    {
        data: 'id',
    },
    {
        data: 'product_code',
        className: 'text-truncate',
    },
    {
        data: 'product_name',
    },
    {
        data: 'product_qty',
    },
    {
        data: 'price',
        render:function(data,type,row){
            return '$ ' + formatNumber(data);
        }
    },
    {
        data: 'order_date',
    },
]

var datatable_init = function (table, ajax, columns, colAdjust = [], callback = '') {
    $(table).DataTable({
        processing: true,
        data:ajax,
        columns,
        pageLength: 10,
        responsive: true,
        lengthChange: false,
        ordering: true,
        order: [1,'desc'],
        rowCallback: function(row,data){
            $(row).on('click', ':not(.row-detail)',function(){
                location.href=`${baseUrl}suppliers/detail.html`
            });
        }
        // initComplete: function (settings) {
        //     if (table != '#table_payment') {
        //         createIndexColumn(settings.oInstance.api());
        //     }
        // },
    });
}

datatable_init('#table_suppliers', suppliers , suppliersColumns);
datatable_init('#table_suppliers-orders', orders , ordersColumns);