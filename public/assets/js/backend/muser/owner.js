define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'muser/owner/index' + location.search,
                    add_url: 'muser/owner/add',
                    edit_url: 'muser/owner/edit',
                    del_url: 'muser/owner/del',
                    multi_url: 'muser/owner/multi',
                    table: 'user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'group_id', title: __('Group_id')},
                        {field: 'username', title: __('Username')},
                        {field: 'nickname', title: __('Nickname')},
                        {field: 'password', title: __('Password')},
                        {field: 'salt', title: __('Salt')},
                        {field: 'email', title: __('Email')},
                        {field: 'mobile', title: __('Mobile')},
                        {field: 'avatar', title: __('Avatar'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'level', title: __('Level')},
                        {field: 'gender', title: __('Gender')},
                        {field: 'birthday', title: __('Birthday'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'bio', title: __('Bio')},
                        {field: 'money', title: __('Money'), operate:'BETWEEN'},
                        {field: 'score', title: __('Score')},
                        {field: 'successions', title: __('Successions')},
                        {field: 'maxsuccessions', title: __('Maxsuccessions')},
                        {field: 'prevtime', title: __('Prevtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'logintime', title: __('Logintime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'loginip', title: __('Loginip')},
                        {field: 'loginfailure', title: __('Loginfailure')},
                        {field: 'joinip', title: __('Joinip')},
                        {field: 'jointime', title: __('Jointime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'token', title: __('Token')},
                        {field: 'status', title: __('Status'), formatter: Table.api.formatter.status},
                        {field: 'verification', title: __('Verification')},
                        {field: 'id_frontimage', title: __('Id_frontimage'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'id_backimage', title: __('Id_backimage'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'drivinglicenceimage', title: __('Drivinglicenceimage'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'openid', title: __('Openid')},
                        {field: 'card_id', title: __('Card_id')},
                        {field: 'qianfa_start', title: __('Qianfa_start')},
                        {field: 'qianfa_end', title: __('Qianfa_end')},
                        {field: 'qianfa_unit', title: __('Qianfa_unit')},
                        {field: 'healthimages', title: __('Healthimages'), events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});