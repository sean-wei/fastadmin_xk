<?php

namespace app\admin\model\kaisuo;

use think\Model;
use traits\model\SoftDelete;

class Kaisuo_news extends Model
{

    use SoftDelete;

    //数据库
    protected $connection = 'database';
    // 表名
    protected $name = 'kaisuo_category';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = 'deletetime';

    // 追加属性
    protected $append = [
        'refreshtime_text',
        'status_text',
        'state_text',
        'category_text'
    ];
    

    protected static function init()
    {
        self::afterInsert(function ($row) {
            $pk = $row->getPk();
            $row->getQuery()->where($pk, $row[$pk])->update(['weigh' => $row[$pk]]);
        });
    }

    
    public function getStatusList()
    {
        return ['normal' => __('Normal'), 'hidden' => __('Hidden')];
    }

    public function getStateList()
    {
        return ['0' => __('State 0'), '1' => __('State 1'), '2' => __('State 2')];
    }

    public function getCategoryList()
    {
        return ['product' => __('Category product'), 'fix' => __('Category fix'), 'intro' => __('Category intro'), 'news' => __('Category news')];
    }


    public function getRefreshtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['refreshtime']) ? $data['refreshtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getStateTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['state']) ? $data['state'] : '');
        $list = $this->getStateList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getCategoryTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['category']) ? $data['category'] : '');
        $list = $this->getCategoryList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    protected function setRefreshtimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
