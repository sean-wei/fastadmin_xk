<?php

namespace app\admin\controller\ksconfig;

use app\common\controller\Backend;

/**
 * 关于我们详情
 *
 * @icon fa fa-circle-o
 */
class KsIntro extends Backend
{
    
    /**
     * KsIntro模型对象
     * @var \app\admin\model\ksconfig\KsIntro
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\ksconfig\KsIntro;
        $this->view->assign("statusList", $this->model->getStatusList());
        $this->view->assign("stateList", $this->model->getStateList());
        $this->view->assign("categoryList", $this->model->getCategoryList());
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
            $model = model('kaisuo_category');
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();

            $total = $model
                ->where($where)
                ->where('category', 'intro')
                ->order($sort, $order)
                ->count();

            $list = $model
                ->where($where)
                ->where('category', 'intro')
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }


}
