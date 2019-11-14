<?php

namespace app\api\controller;

use app\common\controller\Api;
use think\Request;

require_once '../AipOcr.php';

/**
 * 首页接口
 */
class Index extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    //baidu AI
    const APP_ID = '17750882';
    const API_KEY = '5f6UsRx8GtY31dpGK0GhazMQ';
    const SECRET_KEY = 'M9tBhNTmhRdXBeN2c3mOIyzaecH7SnPe';

    /**
     * 首页
     *
     */
    public function index()
    {
        $this->success('请求成功');
    }



    /**
     * 身份证图片识别
     * @param $imgUrl
     * @return array
     *
     * 'http://localhost:8826/id.jpg','front'
     */
    public function ai_idcard(){
        $domain = Request::instance()->domain();
        $imgUrl = $domain . $_GET['image'];
        $idCardSide = $_GET['side'];//front - 身份证含照片的一面;back - 身份证带国徽的一面

        $client = new \AipOcr(self::APP_ID, self::API_KEY, self::SECRET_KEY);

        $image = file_get_contents($imgUrl);

        // 调用身份证识别
        $client->idcard($image, $idCardSide);

        // 如果有可选参数
        $options = array();
        $options["detect_direction"] = "true";
        $options["detect_risk"] = "false";

        // 带参数调用身份证识别
        $res = $client->idcard($image, $idCardSide, $options);
        $this->success($res);
    }
}
