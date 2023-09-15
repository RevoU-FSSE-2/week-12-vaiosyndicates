import Table from '../../component/table';
import Form from '../../component/form';

interface DataUser {
  name?: string;
  email?: string;
  gender?: 'L' | 'P';
  address?: string,

}


const Home = () => {

   const data:DataUser[] = [{
    name: 'Sesil',
    email: 'bca@co.id',
    gender: 'P',
    address: 'Kauman'
  }]

  const renderData = () => {
    return(
      data.map((v, index) => {
        return (
          <>
            <tr key={index}>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.gender}</td>
              <td>{v.address}</td>
            </tr>
          </>
        )
      })
    )
  }


  return (
    <>
      <div className="container mx-auto">
        <div className="min-h-screen flex flex-col gap-y-5 items-center bg-slate-300">
          <Form />
          <Table headers={["Nama", "Email", "Gender", "Alamat"]} children={renderData()} />
        </div>
      </div>
    </>
  )
}

export default Home