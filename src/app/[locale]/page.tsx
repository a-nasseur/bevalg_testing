import UsersList from '@/components/UsersList';
import { Typography } from '@mui/material';
import {useTranslations} from 'next-intl';


export default  function Index() {
  const t = useTranslations('Index');
  return (
    <> 
      <Typography variant='h2'>
        {t('users')}
      </Typography>
      <UsersList />
    </>
  );
}