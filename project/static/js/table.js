$('#table').DataTable(
    {
        stateSave: true,
        layout: {
            topEnd: {
                buttons: [
                    {
                        extend: 'collection',
                        text: 'Export',
                        buttons: ['copy', 'excel', 'csv']
                    }
                ]
            },
        },
        responsive: {
            details: {
                display: DataTable.Responsive.display.modal({
                    header: function (row) {
                        var data = row.data();
                        return 'Details:';
                    }
                }),
                renderer: DataTable.Responsive.renderer.tableAll()
            }
        },

        columnControl: [
            {
                target: 0,
                content: ['orderStatus']
            },
            {
                target: 1,
                content: ['search']
            }
        ],
        ordering: {
            indicators: false
        },
        ajax: {
            url: "/plan_by_cars_vactions_table_data",
            dataSrc: ''
        },
        columns: [
            { data: 'type_car_class__car_class' },
            { data: 'budget_owner__budget_owner' },
            { data: 'company__company' },
            { data: 'scenario_budget__scenario_budget' },
            { data: 'type_budget__type_budget' },
            { data: 'company_sh__company_sh' },
            { data: 'department_sh__department_sh' },
            { data: 'grade__grade' },
            { data: 'group_sh__group_sh' },
            { data: 'otdel_sh__otdel_sh' },
            { data: 'post__post' },
            { data: 'period' },
            {
                data: 'free_cars',
                render: DataTable.render.number(null, null, 2)
            },
            {
                data: 'vacations',
                render: DataTable.render.number(null, null, 0)
            },
            {
                data: 'count_vacancy_buy',
                render: DataTable.render.number(null, null, 2)
            },
            {
                data: 'id',
                render: function (data, type) {
                    url = `/plan_by_cars_vactions_edit/${data}`
                    return `<a href="${url}" class="btn edit"><i class="bi bi-pencil text-success fs-5"></i></a>`;
                }
            },
            {
                data: 'id',
                render: function (data, type) {
                    url = `/plan_by_cars_vactions_delete/${data}`
                    return `<a href="${url}" class="btn delete"><i class="bi bi-trash3 text-danger fs-5"></i></a>`;
                }
            }

        ]
    })