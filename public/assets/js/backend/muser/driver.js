define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'muser/driver/index' + location.search,
                    add_url: 'muser/driver/add',
                    edit_url: 'muser/driver/edit',
                    del_url: 'muser/driver/del',
                    multi_url: 'muser/driver/multi',
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
                        {field: 'avatar', title: __('Avatar'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        // {field: 'group_id', title: __('Group_id')},
                        {field: 'username', title: __('Username')},
                        // {field: 'nickname', title: __('Nickname')},
                        // {field: 'password', title: __('Password')},
                        // {field: 'salt', title: __('Salt')},
                        // {field: 'email', title: __('Email')},
                        {field: 'mobile', title: __('Mobile')},
                        // {field: 'level', title: __('Level')},
                        // {field: 'gender', title: __('Gender')},
                        // {field: 'birthday', title: __('Birthday'), operate:'RANGE', addclass:'datetimerange'},
                        // {field: 'bio', title: __('Bio')},
                        // {field: 'money', title: __('Money'), operate:'BETWEEN'},
                        // {field: 'score', title: __('Score')},
                        // {field: 'successions', title: __('Successions')},
                        {field: 'id_frontimage', title: __('Id_frontimage'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'id_backimage', title: __('Id_backimage'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'drivinglicenceimage', title: __('Drivinglicenceimage'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        // {field: 'openid', title: __('Openid')},
                        {field: 'card_id', title: __('Card_id')},
                        {field: 'qianfa_start', title: __('Qianfa_start')},
                        {field: 'qianfa_end', title: __('Qianfa_end')},
                        {field: 'qianfa_unit', title: __('Qianfa_unit')},
                        {field: 'healthimages', title: __('Healthimages'), events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate},

                        // {field: 'maxsuccessions', title: __('Maxsuccessions')},
                        {field: 'prevtime', title: __('Prevtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'logintime', title: __('Logintime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'loginip', title: __('Loginip')},
                        // {field: 'loginfailure', title: __('Loginfailure')},
                        // {field: 'joinip', title: __('Joinip')},
                        // {field: 'jointime', title: __('Jointime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'token', title: __('Token')},
                        // {field: 'status', title: __('Status'), formatter: Table.api.formatter.status},
                        // {field: 'verification', title: __('Verification')},
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

                //身份证正面上传
                $("#plupload-id_frontimage").data("upload-success", function(data, ret){
                    var index = layer.load(1, {
                        shade: [0.1,'#fff'] //0.1透明度的白色背景
                    });

                    $.ajax({
                        url:'/api/Index/ai_idcard',
                        type:'GET',
                        data:{
                            image:data.url,
                            side:'front'
                        },
                        success:function (res) {
                            layer.close(index);

                            if (res.code==1){
                                var wordresult = res.msg.words_result;
                                // console.log('wordresult',wordresult);

                                var carid = wordresult.公民身份号码.words;
                                var name = wordresult.姓名.words;
                                if (carid=='' || name==''){
                                    layer.msg('请重新上传清晰身份证正面照')
                                } else {
                                    $("#c-card_id").val(carid);
                                    $("#c-username").val(name);
                                    layer.msg('智能识别成功');
                                }
                            } else {
                                layer.msg('智能识别出错');
                            }
                        }
                    });
                });

                //身份证反面上传
                $("#plupload-id_backimage").data("upload-success", function(data, ret){
                    var index = layer.load(1, {
                        shade: [0.1,'#fff'] //0.1透明度的白色背景
                    });

                    $.ajax({
                        url:'/api/Index/ai_idcard',
                        type:'GET',
                        data:{
                            image:data.url,
                            side:'back'
                        },
                        success:function (res) {
                            layer.close(index);
                            if (res.code==1){
                                var wordresult = res.msg.words_result;
                                console.log('wordresult',wordresult);

                                var qianfaStart = wordresult.签发日期.words;
                                var qianfaEnd = wordresult.失效日期.words;
                                var qianfaUnit = wordresult.签发机关.words;

                                if (qianfaStart=='' || qianfaEnd=='' || qianfaUnit==''){
                                    layer.msg('请重新上传清晰身份证背面照')
                                } else {
                                    $("#c-qianfa_start").val(qianfaStart);
                                    $("#c-qianfa_end").val(qianfaEnd);
                                    $("#c-qianfa_unit").val(qianfaUnit);
                                    layer.msg('智能识别成功');
                                }
                            } else {
                                layer.msg('智能识别失败');
                            }
                        }
                    });
                });




            }
        }
    };
    return Controller;
});