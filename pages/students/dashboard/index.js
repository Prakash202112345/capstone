import BottomNav from '@/component/BottomNav';
import BottomNavigation from '@/component/BottomNav';
import Header from '@/component/Header';
import { getSingleStudent } from '@/utils/fetcher';
import { decode } from 'next-auth/jwt';
import React from 'react'

function index({ studentData }) {
  return (
    <>
      <Header HeaderText={"Student Page"} />
      <section className='py-3'>
        <div className="border shadow rounded mx-3 p-3">
          <div className="row">
            <div className="col-3 col-md-3">
              <img src="https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-113133662.jpg" alt="" className='img-fluid' />
            </div>
            <div className="col-9 col-md-9">
              <h4 className='mb-0'>{studentData.name}</h4>
              <p className='mb-0'>Java programming CS-406</p>
              <p className='mb-0'>22-May-2020 9:27PM</p>
              <p className='text-warning mb-0'>upcoming</p>
            </div>
          </div>
        </div>
      </section>
      <div className="bottomNav">
        <BottomNav />
      </div>
    </>
  )
}
export const getServerSideProps = async (context) => {
  const sessionToken = context.req.cookies["next-auth.session-token"];
  const decoded = await decode({
    token: sessionToken,
    secret: "test",
  });
  const user = await getSingleStudent({ id: decoded.id })
  return {
    props: {
      studentData: user.data
    }
  };
};

export default index