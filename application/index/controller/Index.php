<?php

namespace app\index\controller;

use app\common\controller\Frontend;
use think\Config;

class Index extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function index()
    {
        return $this->view->fetch();
    }

    public function news()
    {
        $newslist = [];
        return jsonp(['newslist' => $newslist, 'new' => count($newslist), 'url' => 'https://www.fastadmin.net?ref=news']);
    }



    public function testJson(){
        $data = [
            'sean' => 'BMW',
            'edc' => 'Bens',
            'MC Hotdog' => 'cadillac'
        ];

        $result = toJson(200,'success', $data);

        return $result;
    }


    /**
     * 百度小程序数据接口test
     * @return string
     */
    public function baiduJson(){
        $data = db('kaisuo_category')
            ->limit(10)
            ->order('updatetime', 'desc')
            ->select();

        foreach ($data as &$item){
            $item['image'] = Config::get('root_address') . $item['image'];
        }

        $result = toJson(200,'success', $data);

        return $result;
    }

    /**
     * @param $id 详情id
     * @return string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function detailNews(){

        $id = $this->request->param('id');

        $data = db('kaisuo_category')
            ->where('id',$id)
            ->select();

        $result = toJson(200,'success', $data);

        return $result;
    }





}
