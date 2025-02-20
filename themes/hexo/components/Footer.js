import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

return (
  <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm p-6'>
    {/* <DarkModeButton/> */}
    <i className='fas fa-copyright' /> {`${copyrightDate}`}
    <span>
      <i className='mx-1 animate-pulse fas fa-heart' />{' '}
      <a href={siteConfig('LINK')} className='underline font-bold dark:text-gray-300'>
        {siteConfig('AUTHOR')}
      </a>
      .<br />
      {siteConfig('BEI_AN') && (
        <>
          <i className='fas fa-shield-alt' />{' '}
          <a href='https://beian.miit.gov.cn/' className='mr-2'>
            {siteConfig('BEI_AN')}
          </a>
          <br />
        </>
      )}
      <span className='hidden busuanzi_container_site_pv'>
        <i className='fas fa-eye' />
        <span className='px-1 busuanzi_value_site_pv'> </span>
      </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
      </span>
      <p className='text-xs pt-4 text-light-400 dark:text-gray-400'>
        {title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}
      </p>
      <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>
        Copyright © 2024{' '}
        <a href='https://www.example.com' className='dark:text-gray-300'>
          www.example.com
        </a>
        , INC. All rights reserved.
      </p>
      <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>
        إخلاء المسؤولية: يجب أن يكون عمرك أكثر من 19 عامًا للانضمام. example.com ليست خدمة مرافقة. example.com
 لا يدعم المرافقة أو الدعارة. الملفات الشخصية التي قد تنتهك هذه الشروط و
 سيتم حظر الخدمات.
      </p>
    </span>
  </footer>
);

}

export default Footer
