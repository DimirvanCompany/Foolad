'use client';

import { useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { useTable } from 'react-table';
import * as XLSX from 'xlsx';

export default function AuctionTable() {
  const data = useMemo(() => [
    { id: 1, requestNumber: '260', title: 'لوازم کامپیوتر', fromDate: '1400/04/29', toDate: '1400/05/01', buyer: 'هادی فتاحی بافقی', phone: '03531454977' , desc : 'اگهی ماقصه...' },
    { id: 2, requestNumber: '266', title: 'هارد SSD', fromDate: '1400/05/02', toDate: '1400/05/05', buyer: 'محمد رضایی', phone: '03531454978' },
    { id: 3, requestNumber: '270', title: 'لوازم کامپیوتر', fromDate: '1400/04/29', toDate: '1400/05/01', buyer: 'هادی فتاحی بافقی', phone: '03531454977' },
    { id: 4, requestNumber: '271', title: 'هارد SSD', fromDate: '1400/05/02', toDate: '1400/05/05', buyer: 'محمد رضایی', phone: '03531454978' },
    { id: 5, requestNumber: '280', title: 'لوازم کامپیوتر', fromDate: '1400/04/29', toDate: '1400/05/01', buyer: 'هادی فتاحی بافقی', phone: '03531454977' },
    { id: 6, requestNumber: '282', title: 'هارد SSD', fromDate: '1400/05/02', toDate: '1400/05/05', buyer: 'محمد رضایی', phone: '03531454978' },
    { id: 7, requestNumber: '285', title: 'لوازم کامپیوتر', fromDate: '1400/04/29', toDate: '1400/05/01', buyer: 'هادی فتاحی بافقی', phone: '03531454977' },
    { id: 8, requestNumber: '289', title: 'هارد SSD', fromDate: '1400/05/02', toDate: '1400/05/05', buyer: 'محمد رضایی', phone: '03531454978' },
    { id: 9, requestNumber: '295', title: 'لوازم کامپیوتر', fromDate: '1400/04/29', toDate: '1400/05/01', buyer: 'هادی فتاحی بافقی', phone: '03531454977' },
    { id: 10, requestNumber: '298', title: 'هارد SSD', fromDate: '1400/05/02', toDate: '1400/05/05', buyer: 'محمد رضایی', phone: '03531454978' },
    { id: 11, requestNumber: '300', title: 'لوازم کامپیوتر', fromDate: '1400/04/29', toDate: '1400/05/01', buyer: 'هادی فتاحی بافقی', phone: '03531454977' },
    { id: 12, requestNumber: '310', title: 'هارد SSD', fromDate: '1400/05/02', toDate: '1400/05/05', buyer: 'محمد رضایی', phone: '03531454978' },
  ], []);

  const columns = useMemo(() => [
    { Header: 'شماره درخواست', accessor: 'requestNumber' },
    { Header: 'عنوان', accessor: 'title' },
    { Header: 'از تاریخ', accessor: 'fromDate' },
    { Header: 'تا تاریخ', accessor: 'toDate' },
    { Header: 'نام کارپرداز', accessor: 'buyer' },
    { Header: 'شماره تماس', accessor: 'phone' },
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  const [modalOpen, setModalOpen] = useState(false);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Auction Data');
    XLSX.writeFile(workbook, 'auction_data.xlsx');
  };

  return (
    <Container className='my-5'>
        <div>
            <h3 className='text-justify my-5 bg-gray-200 p-5 rounded-lg border-r-4 border-[#292a71] text-lg'>
            کليه اشخاص حقوقي و حقيقي واجد شرايط که قصد شرکت در مناقصه را دارند جهت مشاهده جزييات مناقصه و خريد اسنادلازم است اقدام به ثبت نام و تشکيل حساب کاربري در سامانه شناسايي و ارزيابي تامين کنندگان شرکت سنگ آهن مرکزي نمايند.لذا جهت ثبت نام به منوي ارزيابي تامين کنندگان بخش ثبت نام اوليه مراجعه فرماييد.
چنانچه قبلا در اين سامانه ثبت نام نموده ايد به بخش بازرگاني منوي مناقصه در حساب کاربري خود مراجعه
و اطلاعات مناقصه را ملاحظه فرماييد.
در صورت داشتن هرگونه سوالي با واحد برنامه ريزي خريد با شماره تلفن 03531454980 تماس حاصل فرماييد.
            </h3>
        </div>
        <div className="">
      
      <table {...getTableProps()} className="w-full border border-gray-300">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="border p-2">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border cursor-pointer" onClick={() => setModalOpen(true)}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border p-2">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        
      </table>
      <button onClick={exportToExcel} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded mt-4">دانلود Excel</button>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-lg">
            <h2 className="text-xl font-bold mb-4">جزئیات مناقصه</h2>
            {data.map(item => (
                <p className="text-md whitespace-pre-wrap">{item.desc}</p>
            ))}
            <button onClick={() => setModalOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer">بستن</button>
          </div>
        </div>
      )}
    </div>
    </Container>
  );
}
