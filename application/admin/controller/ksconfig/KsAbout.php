<?php

namespace app\admin\controller\ksconfig;

use app\common\controller\Backend;
use think\Db;

/**
 * 关于我们
 *
 * @icon fa fa-circle-o
 */
class KsAbout extends Backend
{
    
    /**
     * KsAbout模型对象
     * @var \app\admin\model\ksconfig\KsAbout
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\ksconfig\KsAbout;
        $this->view->assign("configCategoryList", $this->model->getConfigCategoryList());
    }
    
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


    /**
     * 查看
     */
    public function index()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax())
        {
            $model = model('kaisuo_config');
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();

            $total = $model
                ->where($where)
                ->where('config_category', 'about')
                ->order($sort, $order)
                ->count();

            $list = $model
                ->where($where)
                ->where('config_category', 'about')
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }

        $about = db('kaisuo_config')->where(['config_category' => 'about'])->select();
//        var_dump($about[0]);exit();
        $this->assign('about',$about[0]);

        return $this->view->fetch();
    }


    /**
     * 更新个人信息
     */
    public function update()
    {
        if ($this->request->isPost())
        {
            $params = $this->request->post("row/a");
            if ($params)
            {
                $about = \app\admin\model\ksconfig\KsAbout::get(['config_category' => 'about']);
                if ($about){
                    $about->save($params);
                }else{
                    Db::name('kaisuo_config')->data($params)->insert();
                }
                $this->success();
            }
            $this->error();
        }
        return;
    }


}
