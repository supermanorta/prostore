import { APP_NAME } from '@/app/constants';
import React from 'react'

export default function footer() {
  const currentYear = new Date().getFullYear();

    return (
    <footer className='border-t'>
      <div>
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
}
