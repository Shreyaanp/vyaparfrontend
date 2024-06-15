import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UploadBook from '../components/UploadDocs/UploadBook';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Upload Douments" />

      <div className="flex flex-col gap-10">
        <UploadBook />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
