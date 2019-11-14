<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:93:"/Applications/MAMP/htdocs/fastadmin_xk/public/../application/admin/view/muser/owner/edit.html";i:1573633112;s:81:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/layout/default.html";i:1573614238;s:78:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/common/meta.html";i:1573614238;s:80:"/Applications/MAMP/htdocs/fastadmin_xk/application/admin/view/common/script.html";i:1573614238;}*/ ?>
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
                                <form id="edit-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">

    <div class="form-group">
        <label for="c-group_id" class="control-label col-xs-12 col-sm-2"><?php echo __('Group'); ?>:</label>
        <div class="col-xs-12 col-sm-4">
            <?php echo $groupList; ?>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Avatar'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-avatar" data-rule="required" class="form-control" size="50" name="row[avatar]" type="text" value="<?php echo htmlentities($row['avatar']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-avatar" class="btn btn-danger plupload" data-input-id="c-avatar" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-avatar"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-avatar" class="btn btn-primary fachoose" data-input-id="c-avatar" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-avatar"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-avatar"></ul>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Username'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-username" data-rule="required" class="form-control" name="row[username]" type="text" value="<?php echo htmlentities($row['username']); ?>">
        </div>
    </div>
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Nickname'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-nickname" data-rule="required" class="form-control" name="row[nickname]" type="text" value="<?php echo htmlentities($row['nickname']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Password'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-password" data-rule="required" class="form-control" name="row[password]" type="text" value="<?php echo htmlentities($row['password']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Salt'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-salt" data-rule="required" class="form-control" name="row[salt]" type="text" value="<?php echo htmlentities($row['salt']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Email'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-email" data-rule="required" class="form-control" name="row[email]" type="text" value="<?php echo htmlentities($row['email']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Mobile'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-mobile" data-rule="required" class="form-control" name="row[mobile]" type="text" value="<?php echo htmlentities($row['mobile']); ?>">
        </div>
    </div>

    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Level'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-level" data-rule="required" class="form-control" name="row[level]" type="number" value="<?php echo htmlentities($row['level']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Gender'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-gender" data-rule="required" class="form-control" name="row[gender]" type="number" value="<?php echo htmlentities($row['gender']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Birthday'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-birthday" class="form-control datetimepicker" data-date-format="YYYY-MM-DD" data-use-current="true" name="row[birthday]" type="text" value="<?php echo $row['birthday']; ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Bio'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-bio" data-rule="required" class="form-control" name="row[bio]" type="text" value="<?php echo htmlentities($row['bio']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Money'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-money" data-rule="required" class="form-control" step="0.01" name="row[money]" type="number" value="<?php echo htmlentities($row['money']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Score'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-score" data-rule="required" class="form-control" name="row[score]" type="number" value="<?php echo htmlentities($row['score']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Successions'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-successions" data-rule="required" class="form-control" name="row[successions]" type="number" value="<?php echo htmlentities($row['successions']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Maxsuccessions'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-maxsuccessions" data-rule="required" class="form-control" name="row[maxsuccessions]" type="number" value="<?php echo htmlentities($row['maxsuccessions']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Prevtime'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-prevtime" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[prevtime]" type="text" value="<?php echo $row['prevtime']?datetime($row['prevtime']):''; ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Logintime'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-logintime" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[logintime]" type="text" value="<?php echo $row['logintime']?datetime($row['logintime']):''; ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Loginip'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-loginip" data-rule="required" class="form-control" name="row[loginip]" type="text" value="<?php echo htmlentities($row['loginip']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Loginfailure'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-loginfailure" data-rule="required" class="form-control" name="row[loginfailure]" type="number" value="<?php echo htmlentities($row['loginfailure']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Joinip'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-joinip" data-rule="required" class="form-control" name="row[joinip]" type="text" value="<?php echo htmlentities($row['joinip']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Jointime'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-jointime" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[jointime]" type="text" value="<?php echo $row['jointime']?datetime($row['jointime']):''; ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Token'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-token" data-rule="required" class="form-control" name="row[token]" type="text" value="<?php echo htmlentities($row['token']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Status'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-status" data-rule="required" class="form-control" name="row[status]" type="text" value="<?php echo htmlentities($row['status']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Verification'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-verification" data-rule="required" class="form-control" name="row[verification]" type="text" value="<?php echo htmlentities($row['verification']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Id_frontimage'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-id_frontimage" class="form-control" size="50" name="row[id_frontimage]" type="text" value="<?php echo htmlentities($row['id_frontimage']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-id_frontimage" class="btn btn-danger plupload" data-input-id="c-id_frontimage" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-id_frontimage"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-id_frontimage" class="btn btn-primary fachoose" data-input-id="c-id_frontimage" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-id_frontimage"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-id_frontimage"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Id_backimage'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-id_backimage" class="form-control" size="50" name="row[id_backimage]" type="text" value="<?php echo htmlentities($row['id_backimage']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-id_backimage" class="btn btn-danger plupload" data-input-id="c-id_backimage" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-id_backimage"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-id_backimage" class="btn btn-primary fachoose" data-input-id="c-id_backimage" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-id_backimage"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-id_backimage"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Drivinglicenceimage'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-drivinglicenceimage" class="form-control" size="50" name="row[drivinglicenceimage]" type="text" value="<?php echo htmlentities($row['drivinglicenceimage']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-drivinglicenceimage" class="btn btn-danger plupload" data-input-id="c-drivinglicenceimage" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-drivinglicenceimage"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-drivinglicenceimage" class="btn btn-primary fachoose" data-input-id="c-drivinglicenceimage" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-drivinglicenceimage"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-drivinglicenceimage"></ul>
        </div>
    </div>
    <!--<div class="form-group">-->
    <!--<label class="control-label col-xs-12 col-sm-2"><?php echo __('Openid'); ?>:</label>-->
    <!--<div class="col-xs-12 col-sm-8">-->
    <!--<input id="c-openid" class="form-control" name="row[openid]" type="text" value="<?php echo htmlentities($row['openid']); ?>">-->
    <!--</div>-->
    <!--</div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Card_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-card_id"  data-source="card/index" class="form-control selectpage" name="row[card_id]" type="text" value="<?php echo htmlentities($row['card_id']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Qianfa_start'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-qianfa_start" class="form-control" name="row[qianfa_start]" type="text" value="<?php echo htmlentities($row['qianfa_start']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Qianfa_end'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-qianfa_end" class="form-control" name="row[qianfa_end]" type="text" value="<?php echo htmlentities($row['qianfa_end']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Qianfa_unit'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-qianfa_unit" class="form-control" name="row[qianfa_unit]" type="text" value="<?php echo htmlentities($row['qianfa_unit']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Healthimages'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-healthimages" class="form-control" size="50" name="row[healthimages]" type="text" value="<?php echo htmlentities($row['healthimages']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-healthimages" class="btn btn-danger plupload" data-input-id="c-healthimages" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="true" data-preview-id="p-healthimages"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-healthimages" class="btn btn-primary fachoose" data-input-id="c-healthimages" data-mimetype="image/*" data-multiple="true"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-healthimages"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-healthimages"></ul>
        </div>
    </div>
    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-success btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo htmlentities($site['version']); ?>"></script>
    </body>
</html>