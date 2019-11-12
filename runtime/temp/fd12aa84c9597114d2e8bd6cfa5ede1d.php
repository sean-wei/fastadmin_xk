<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:100:"/Applications/MAMP/htdocs/fastadmin_xk/public/../application/admin/view/ksconfig/ks_about/index.html";i:1572333177;s:81:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/layout/default.html";i:1559297295;s:78:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/common/meta.html";i:1559297295;s:80:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/common/script.html";i:1559297295;}*/ ?>
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
    <div class="col-md-4" style="width: 600px;">
        <div class="box box-success">
            <div class="panel-heading">
                关于我们
            </div>
            <div class="panel-body">

                <form id="update-form" role="form" data-toggle="validator" method="POST" action="<?php echo url('ksconfig.ksabout/update'); ?>">
                    <div class="box-body box-profile">
                        <h3 class="profile-username text-center">公司简介</h3>

                        <p class="text-muted text-center"></p>
                        <div class="form-group">
                            <label for="content" class="control-label">内容:</label>
                            <textarea type="text" class="form-control" id="content" data-rule rows="7"
                                      name="row[content]"><?php echo $about['content']; ?></textarea>
                        </div>

                        <!--关于我们标志位-->
                        <input type="hidden" id="c-config_category" name="row[config_category]" value="about"/>


                        <div class="form-group">
                            <button type="submit" class="btn btn-success"><?php echo __('Submit'); ?></button>
                            <button type="reset" class="btn btn-default"><?php echo __('Reset'); ?></button>
                        </div>

                    </div>
                </form>
            </div>

            <!--<div class="panel-body" style="padding-left:22px">-->

                <!--<label for="content" class="control-label">推广链接:</label>-->

                <!--<input type="text" style="width: 500px;background-color: lightgrey" disabled="disabled"-->
                       <!--value="baiduboxapp://swan/KRMRoxNzDLqs9fZeQTLoXtZmujZSFtL6/pages/index/index-->
<!--">-->

            <!--</div>-->

            <!--<div class="panel-body" style="padding-left:22px">-->
                <!--<label for="content" class="control-label">手机看数据:</label>-->
                <!--<img style="text-align: center" src="http://localhost:8824/uploads/baiduqr.png">-->
            <!--</div>-->

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