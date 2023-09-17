// import Table from '../../component/table';
import {useState} from 'react';
import Form from '../../component/form';
import { 
  Steps
} from 'antd';


const Home = () => {
  const [page, setPage] = useState<number>(0)


  return (
    <>
      <div className="container mx-auto">
        <div className="min-h-screen flex flex-col gap-y-5 items-center bg-slate-300">
          <Steps
            className='gap-y-10'
            current={page}
            items={[
              {
                title: 'Personal Information',
              },
              {
                title: 'Address Information',
              },
              {
                title: 'User Authentification'
              },
            ]}
          />
          <Form page= {page} setX= {setPage} />
        </div>
      </div>
    </>
  )
}

export default Home