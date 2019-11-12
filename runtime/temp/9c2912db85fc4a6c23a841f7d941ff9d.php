<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:102:"/Applications/MAMP/htdocs/fastadmin_xk/public/../application/admin/view/ksconfig/ks_contact/index.html";i:1565614341;s:81:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/layout/default.html";i:1559297295;s:78:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/common/meta.html";i:1559297295;s:80:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/common/script.html";i:1559297295;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo $config['language']; ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo (isset($title) && ($title !== '')?$title:''); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">

<link rel="shortcut icon" href="/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="/assets/css/backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/assets/js/html5shiv.js"></script>
  <script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config:  <?php echo json_encode($config); ?>
    };
</script>
    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG && !$config['fastadmin']['multiplenav']): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo $vo['url']; ?>"><?php echo $vo['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <style>
    .profile-avatar-container {
        position: relative;
        width: 100px;
        margin: 0 auto;
    }

    .profile-avatar-container .profile-user-img {
        width: 100px;
        height: 100px;
    }

    .profile-avatar-container .profile-avatar-text {
        display: none;
    }

    .profile-avatar-container:hover .profile-avatar-text {
        display: block;
        position: absolute;
        height: 100px;
        width: 100px;
        background: #444;
        opacity: .6;
        color: #fff;
        top: 0;
        left: 0;
        line-height: 100px;
        text-align: center;
    }

    .profile-avatar-container button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        opacity: 0;
    }
</style>
<div class="row animated fadeInRight">
    <div class="col-md-4" style="width: 500px;">
        <div class="box box-success">
            <div class="panel-heading">
                联系我们
            </div>
            <div class="panel-body">

                <form id="update-form" role="form" data-toggle="validator" method="POST" action="<?php echo url('ksconfig.ks_contact/update'); ?>">
                    <!--<input type="hidden" id="c-avatar" name="row[avatar]" value="<?php echo $admin['avatar']; ?>"/>-->
                    <div class="box-body box-profile">

                        <!--<div class="profile-avatar-container">-->
                            <!--<img class="profile-user-img img-responsive img-circle plupload" src="<?php echo cdnurl($admin['avatar']); ?>" alt="">-->
                            <!--<div class="profile-avatar-text img-circle"><?php echo __('Click to edit'); ?></div>-->
                            <!--<button id="plupload-avatar" class="plupload" data-input-id="c-avatar"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button>-->
                        <!--</div>-->

                        <h3 class="profile-username text-center">联系我们</h3>

                        <p class="text-muted text-center"></p>

                        <!--<div class="form-group" style="margin-top: 20px">-->
                            <!--<label class="control-label col-xs-12 col-sm-2" style="width: 18.666667%;margin-left: -15px;margin-top: 10px;">轮播图:</label>-->
                            <!--<div class="col-xs-12 col-sm-8" style="margin-left: -20px;margin-top: 4px;">-->
                                <!--<div class="input-group">-->
                                    <!--<input id="c-images" style="width: 225px" class="form-control" size="50" name="row[images]" type="text" value="<?php echo htmlentities($contact['images']); ?>">-->
                                    <!--<div class="input-group-addon no-border no-padding">-->
                                        <!--<span><button type="button" id="plupload-images" class="btn btn-danger plupload" data-input-id="c-images" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="true" data-preview-id="p-images"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>-->
                                        <!--<span><button type="button" id="fachoose-images" class="btn btn-primary fachoose" data-input-id="c-images" data-mimetype="image/*" data-multiple="true"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>-->
                                    <!--</div>-->
                                    <!--<span class="msg-box n-right" for="c-images"></span>-->
                                <!--</div>-->
                                <!--<ul class="row list-inline plupload-preview" id="p-images"></ul>-->
                            <!--</div>-->
                        <!--</div>-->


                        <div class="form-group">
                            <label for="contactname" class="control-label">联系人:</label>
                            <input type="text" class="form-control" id="contactname" name="row[contactname]" value="<?php echo htmlentities($contact['contactname']); ?>" />
                        </div>
                        <div class="form-group">
                            <label for="qq" class="control-label">QQ:</label>
                            <input type="text" class="form-control" id="qq" name="row[qq]" value="<?php echo htmlentities($contact['qq']); ?>" />
                        </div>
                        <div class="form-group">
                            <label for="tel" class="control-label">网址:</label>
                            <input type="text" class="form-control" id="tel" name="row[tel]" value="<?php echo htmlentities($contact['tel']); ?>" />
                        </div>
                        <div class="form-group">
                            <label for="phone" class="control-label">手机:</label>
                            <input type="text" class="form-control" id="phone" name="row[phone]" value="<?php echo htmlentities($contact['phone']); ?>" data-rule="required"/>
                        </div>
                        <div class="form-group">
                            <label for="email" class="control-label">邮箱:</label>
                            <input type="text" class="form-control" id="email" name="row[email]" value="<?php echo htmlentities($contact['email']); ?>" data-rule="required;email"/>
                        </div>
                        <div class="form-group">
                            <label for="address" class="control-label">地址:</label>
                            <input type="text" class="form-control" id="address" name="row[address]" value="<?php echo htmlentities($contact['address']); ?>" data-rule="required"/>
                        </div>



                        <!--联系我们标志位-->
                        <input type="hidden" id="c-config_category" name="row[config_category]" value="contact"/>


                        <div class="form-group">
                            <button type="submit" class="btn btn-success"><?php echo __('Submit'); ?></button>
                            <button type="reset" class="btn btn-default"><?php echo __('Reset'); ?></button>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    </div>

</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo $site['version']; ?>"></script>
    </body>
</html>