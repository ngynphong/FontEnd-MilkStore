

import "./index.scss"

function Vieworder() {
    const columns = [
        {
          dataIndex: 'Code',
          title: 'Code',
          key: 'Code',
        },
        {
          dataIndex: 'name',
          title: 'Full Name',
          key: 'name',
        },
        {
            dataIndex: 'date',
            title: 'Ngày mua',
            key: 'date',
        },
        {
          dataIndex: 'number',
          title: 'Phone number',
          key: 'number',
        },
        {
          dataIndex: 'Address',
          title: 'Address',
          key: 'Address',
        //   render: (id) => (
        //     <Popconfirm
        //       title="Delete the task"
        //       description="Are you sure to delete this task?"
        //       onConfirm={() => handleDeleteCustomer(id)}
        //       okText="Yes"
        //       cancelText="No"
        //     >
        //       <Button type='primary' danger>Delete</Button>
        //     </Popconfirm>
        //   )
        },
        {
            dataIndex: 'money',
            title: 'Tổng tiền',
            key: 'money',
          },
      ];
    return (
        <div className="vieworder-list">

            <div className="vieworder-list__header">
                <h2>Danh sách đơn</h2>
            </div>
            <div>
                <table className="vieworder-list__table">
                    
                </table>
            </div>
        </div>
    )
}

export default Vieworder