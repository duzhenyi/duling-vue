const baseStyle = {
    width: 200,
    height: 33,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '',
    letterSpacing: 0,
    textAlign: '',
    color: '',
    rotate: 0,
    opacity: 1,
}

const baseDataAttrbutes =
{
    // 支持清除
    allowClear: false,
    // 默认获取焦点
    autoFocus: false,
    // 作用域插槽，自定义日期单元格的内容
    dateRender: '',
    // 是否禁用
    disabled: false,
    // 不可选择的日期
    disabledDate: '',
    // 日期面板的状态（设置后无法选择年份/月份？） time|date|month|year|decade
    mode: 'date',
    // 控制弹层是否展开
    open: false,
    // 选择框默认文字
    placeholder: '',
    // 额外的弹出日历样式
    popupStyle: {},
    // 额外的弹出日历 className
    dropdownClassName: '',
    // 	输入框大小，large 高度为 40px，small 为 24px，默认是 32px
    size: 'default',
    // 自定义的选择框后缀图标
    suffixIcon: '',
    // 设置输入框为只读（避免在移动设备上打开虚拟键盘）
    inputReadOnly: '',
    // 该值将合并到 placement 的配置中，设置参考 dom-align
    align: '',
    // 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象
    valueFormat: '',
}
export const componentList = [
    {
        component: 'a-input', // 文本输入框
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'change',
            //按下回车的回调
            'pressEnter'], // 事件列表
        // 组件属性
        attributes: {
            // 带标签的 input，设置后置标签
            addonAfter: '',
            // 带标签的 input，设置前置标签
            addonBefore: '',
            // 输入框默认内容
            defaultValue: '',
            // 是否禁用状态，默认为 false
            disabled: false,
            // 输入框的 id
            id: '',
            // 最大长度
            maxLength: 9999999,
            // 带有前缀图标的 input
            prefix: '',
            // 控件大小 large default small
            size: 'default',
            // 带有后缀图标的 input
            suffix: '',
            // 声明 input 类型
            type: '',
            // 输入框内容
            value: 'text',
            // 可以点击清除图标删除内容
            allowClear: false,
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-input-number', // 数字输入框
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'change',
            //按下回车的回调
            'pressEnter'], // 事件列表
        // 组件属性
        attributes: {
            // 带标签的 input，设置后置标签
            addonAfter: '',
            // 带标签的 input，设置前置标签
            addonBefore: '',
            // 输入框默认内容
            defaultValue: '',
            // 是否禁用状态，默认为 false
            disabled: false,
            // 输入框的 id
            id: '',
            // 最大长度
            maxLength: 9999999,
            // 带有前缀图标的 input
            prefix: '',
            // 控件大小 large default small
            size: 'default',
            // 带有后缀图标的 input
            suffix: '',
            // 声明 input 类型
            type: '',
            // 输入框内容
            value: 'text',
            // 可以点击清除图标删除内容
            allowClear: false,
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-input-password', // 密码输入框
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'change',
            //按下回车的回调
            'pressEnter'], // 事件列表
        // 组件属性
        attributes: {
            // 带标签的 input，设置后置标签
            addonAfter: '',
            // 带标签的 input，设置前置标签
            addonBefore: '',
            // 输入框默认内容
            defaultValue: '',
            // 是否禁用状态，默认为 false
            disabled: false,
            // 输入框的 id
            id: '',
            // 最大长度
            maxLength: 9999999,
            // 带有前缀图标的 input
            prefix: '',
            // 控件大小 large default small
            size: 'default',
            // 带有后缀图标的 input
            suffix: '',
            // 声明 input 类型
            type: '',
            // 输入框内容
            value: 'text',
            // 可以点击清除图标删除内容
            allowClear: false,
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-radio', // 单选框
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'change'], // 事件列表
        // 组件属性
        attributes: {
            // 自动获取焦点
            autoFocus: false,
            // 指定当前是否选中
            checked: false,
            // 初始是否选中
            defaultChecked: false,
            // 根据 value 进行比较，判断是否选中
            value: ''
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-checkbox', // 多选框
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'change'], // 事件列表
        // 组件属性
        attributes: {
            // 自动获取焦点
            autoFocus: false,
            // 指定当前是否选中
            checked: false,
            // 初始是否选中
            defaultChecked: false,
            // 失效状态
            disabled: false,
            // 设置 indeterminate 状态，只负责样式控制
            indeterminate: false
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-select', // 下拉选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'change'], // 事件列表
        // 组件属性
        attributes: {
            // 支持清除
            allowClear: false,
            // 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。
            autoClearSearchValue: true,
            // 默认获取焦点
            autoFocus: false,
            // 是否默认高亮第一个选项
            defaultActiveFirstOption: true,
            // 指定默认选中的条目
            defaultValue: '',
            // 是否禁用
            disabled: false,
            // 下拉菜单的 className 属性
            dropdownClassName: '',
            // 下拉菜单和选择器同宽
            dropdownMatchSelectWidth: true,
            // 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
            filterOption: true,
            // 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式
            labelInValue: false,
            // 最多显示多少个 tag
            maxTagCount: 999,
            // 隐藏 tag 时显示的内容
            maxTagPlaceholder: '',
            // 最大显示的 tag 文本长度
            maxTagTextLength: 99,
            // 设置 Select 的模式为多选或标签 'default' | 'multiple' | 'tags' | 'combobox'
            mode: 'default',
            // 	当下拉列表为空时显示的内容
            notFoundContent: 'Not Found',
            // 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索
            optionFilterProp: '',
            // 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。children （combobox 模式下为 value）
            optionLabelProp: 'value',
            // 选择框默认文字
            placeholder: '',
            // 使单选模式可搜索
            showSearch: false,
            // 是否显示下拉小箭头
            showArrow: true,
            // 	选择框大小，可选 large small
            size: 'default',
            // 自定义的选择框后缀图标
            suffixIcon: '',
            // 自定义的多选框清除图标
            removeIcon: '',
            // 自定义的多选框清空图标
            clearIcon: '',
            // 自定义当前选中的条目图标
            menuItemSelectedIcon: '',
            // 在 tags 和 multiple 模式下自动分词的分隔符
            tokenSeparators: [],
            // 指定当前选中的条目
            value: '',
            // options 数据，如果设置则不需要手动构造 selectOption 节点
            options: '',
            // 是否默认展开下拉菜单
            defaultOpen: false,
            // 是否展开下拉菜单
            open: false
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-date-picker', // 日期选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'openChange',
            // 日期面板变化时的回调
            'panelChange',
            // 时间发生变化的回调
            'change',
            //	点击确定按钮的回调
            'ok'], // 事件列表
        // 组件属性
        attributes: {
            ...baseDataAttrbutes,
            // 默认日期
            defaultValue: '',
            // 默认面板日期
            defaultPickerValue: '',
            // 不可选择的时间
            disabledTime: '',
            // 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js
            format: "YYYY-MM-DD",
            // 在面板中添加额外的页脚,slot="renderExtraFooter" slot-scope="mode"
            renderExtraFooter: '',
            // 增加时间选择功能
            showTime: '',
            // 设置用户选择日期时默认的时分秒
            showTime_defaultValue: '',
            // 是否展示“今天”按钮
            showToday: true,
            // 日期
            value: '',
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-week-picker', // 日期周选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'openChange',
            // 日期面板变化时的回调
            'panelChange',
            // 时间发生变化的回调
            'change'], // 事件列表
        // 组件属性
        attributes: {
            ...baseDataAttrbutes,
            // 默认日期
            defaultValue: '',
            // 默认面板日期
            defaultPickerValue: '',
            // 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js
            format: "YYYY-MM-DD",
            // 在面板中添加额外的页脚,slot="renderExtraFooter" slot-scope="mode"
            renderExtraFooter: '',
            // 日期
            value: '',
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-month-picker', // 月时间选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'openChange',
            // 日期面板变化时的回调
            'panelChange',
            // 时间发生变化的回调
            'change'], // 事件列表
        // 组件属性
        attributes: {
            ...baseDataAttrbutes,
            // 默认日期
            defaultValue: '',
            // 默认面板日期
            defaultPickerValue: '',
            // 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js
            format: "YYYY-MM-DD",
            // 在面板中添加额外的页脚,slot="renderExtraFooter" slot-scope="mode"
            renderExtraFooter: '',
            // 自定义的月份内容渲染方法,slot="monthCellContentRender" slot-scope="date, locale"
            monthCellContentRender: '',
            // 日期
            value: '',
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-range-picker', // 时间段选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'openChange',
            // 日期面板变化时的回调
            'panelChange',
            // 待选日期发生变化的回调
            'calendarChange',
            // 日期范围发生变化的回调
            'change',
            // 点击确定按钮的回调
            'ok'], // 事件列表
        // 组件属性
        attributes: {
            ...baseDataAttrbutes,
            // 默认日期
            defaultValue: '',
            // 默认面板日期
            defaultPickerValue: '',
            // 不可选择的时间
            disabledTime: '',
            // 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js
            format: "YYYY-MM-DD HH:mm:ss",
            // 预设时间范围快捷选择
            ranges: '',
            // 在面板中添加额外的页脚,slot="renderExtraFooter" slot-scope="mode"
            renderExtraFooter: '',
            // 设置分隔符
            separator: '~',
            // 增加时间选择功能
            showTime: false,
            // 设置用户选择日期时默认的时分秒
            showTime_defaultValue: '',
            // 日期
            value: '',
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-time-picker', // 时间选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 输入框内容变化时的回调 
            'openChange',
            // 日期面板变化时的回调
            'panelChange'], // 事件列表
        // 组件属性
        attributes: {
            ...baseDataAttrbutes
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-tree-select', // 树选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 选中树节点时调用此函数 
            'change',
            // 文本框值变化时回调
            'search',
            // 被选中时调用
            'select',
            // 展开节点时调用
            'treeExpand'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-cascader', // 级联选择器
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 选择完成后的回调 
            'change',
            // 显示/隐藏浮层的回调
            'popupVisibleChange',
            // 输入框变化时的回调
            'search'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-slider', // 滑动输入条
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。 
            'change',
            // 与 mouseup 触发时机一致，把当前值作为参数传入。
            'afterChange'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-switch', // 开关
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 变化时回调函数 
            'change',
            // 点击时回调函数
            'click'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-button', // 按钮
        animations: [], // 动画列表
        events: ['click'],
        attributes: {
            // 按钮失效状态
            disabled: false,
            // 幽灵属性，使按钮背景透明
            ghost: false,
            // 设置 button 原生的 type 值，可选值请参考 HTML 标准
            htmlType: 'button',
            // 设置按钮的图标类型
            icon: '',
            // 设置按钮载入状态
            loading: false,
            // 设置按钮形状，可选值为 circle、 round 或者不设
            shape: '',
            // 设置按钮大小，可选值为 small large 或者不设
            size: 'default',
            // 设置按钮类型，可选值为 primary dashed danger link 或者不设
            type: 'default',
            // 将按钮宽度调整为其父宽度的选项
            block: false,
        }
    },
    {
        component: 'a-tag', // 标签
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 关闭时的回调 
            'close'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-alert', // 提示
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 关闭时的回调 
            'close'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-table', // 动态表格
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 展开的行变化时触发 
            'expandedRowsChange',
            //分页、排序、筛选变化时触发
            'change',
            // 点击展开图标时触发
            'expand'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-upload', // 上传
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 上传文件改变时的状态，详见 change 
            'change',
            // 点击文件链接或预览图标时的回调 
            'preview',
            // 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。 
            'download',
            // 拖拽文件不符合 accept 类型时的回调 
            'reject',], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-divider', // 分割线
        animations: [], // 动画列表
        // 组件事件
        events: [], // 事件列表
        // 组件属性
        attributes: {
            // 是否虚线
            dashed: false,
            // 分割线标题的位置enum: left right
            orientation: 'center',
            // 水平还是垂直类型 enum: horizontal vertical
            type: 'horizontal'

        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-card', // 卡片布局
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 页签切换的回调
            'tabChange'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-row', // 栅格布局
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 上传文件改变时的状态，详见 change 
            'change',
            // 点击文件链接或预览图标时的回调 
            'preview',
            // 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。 
            'download',
            // 拖拽文件不符合 accept 类型时的回调 
            'reject',], // 事件列表
        // 组件属性
        attributes: {
            row: {
                // 	flex 布局下的垂直对齐方式：top middle bottom
                align: 'top',
                // 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]（1.5.0 后支持）。
                gutter: 0,
                // flex 布局下的水平排列方式：start end center space-around space-between
                justify: 'start',
                // 	布局模式，可选 flex，现代浏览器 下有效
                type: '',
            },
            col: {
                // <576px 响应式栅格，可为栅格数或一个包含其他属性的对象
                xs: '',
                // ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象
                sm: '',
                // ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象
                md: '',
                // ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象
                lg: '',
                // ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
                xl: '',
                // ≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
                xxl: ''
            }
        },
        // 组件样式
        style: baseStyle
    },
    {
        component: 'a-form', // Form表单
        animations: [], // 动画列表
        // 组件事件
        events: [
            // 数据验证成功后回调事件
            'submit'], // 事件列表
        // 组件属性
        attributes: {
        },
        // 组件样式
        style: baseStyle
    },
]