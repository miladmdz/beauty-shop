import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";

function Form() {
  return (
    <div className="xs:container flex justify-center h-fit">
      <div className="w-full xs:w-[400px] sm:w-[600px] h-fit flex flex-col items-center justify-between mt-10 mb-20 py-5 xs:shadow-primryShadow">
        {/* icons */}
        <div className="flex w-[90%] items-center justify-between gap-x-8 mt-4">
          <div>
            <img
              className="w-8 xs:w-12"
              src="./images/Icon/Capture1.png"
              alt=""
            />
          </div>
          <div className="text-2xl font-bold">ثبت نام</div>
          <div>
            <IoPersonAddOutline className="text-3xl xs:text-5xl text-primryCream" />
          </div>
        </div>
        {/* form */}
        <form className="flex flex-col w-[90%] py-4">
          {/* part top username */}
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-3">
              <input
                type="text"
                className="outline-none px-1 py-3 border border-primryGray/50 w-[49%] rounded-md"
                placeholder="نام"
              />
              <input
                type="text"
                className="outline-none px-1 py-3 border border-primryGray/50 w-[49%] rounded-md"
                placeholder="نام خانوادگی"
              />
            </div>
            {/* sexist */}
            <div className="w-full flex flex-col border py-3 border-primryGray/50 rounded-md">
              <select name="" id="" className="outline-none w-full px-1 py-1">
                <option value="-1">جنسیت را انتخاب کنید</option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>
          </div>
          {/* title */}
          <span className="text-sm py-1">تاریخ تولد خود را انتخاب کنید</span>
          {/* part bottom info */}
          <div className="flex flex-col w-full">
            {/* born */}
            <div className="flex w-full gap-x-1 gap-y-2">
              {/* y */}
              <select
                name=""
                id=""
                className="text-xs xs:text-base outline-none px-1 py-3 border border-primryGray/50 w-[80%] rounded-md"
              >
                <option value="-1">انتخاب سال</option>
                <option value="1303">1303</option>
                <option value="1304">1304</option>
                <option value="1305">1305</option>
                <option value="1306">1306</option>
                <option value="1307">1307</option>
                <option value="1308">1308</option>
                <option value="1309">1309</option>
                <option value="1310">1310</option>
                <option value="1311">1311</option>
                <option value="1312">1312</option>
                <option value="1313">1313</option>
                <option value="1314">1314</option>
                <option value="1315">1315</option>
                <option value="1316">1316</option>
                <option value="1317">1317</option>
                <option value="1318">1318</option>
                <option value="1319">1319</option>
                <option value="1320">1320</option>
                <option value="1321">1321</option>
                <option value="1322">1322</option>
                <option value="1323">1323</option>
                <option value="1324">1324</option>
                <option value="1325">1325</option>
                <option value="1326">1326</option>
                <option value="1327">1327</option>
                <option value="1328">1328</option>
                <option value="1329">1329</option>
                <option value="1330">1330</option>
                <option value="1331">1331</option>
                <option value="1332">1332</option>
                <option value="1333">1333</option>
                <option value="1334">1334</option>
                <option value="1335">1335</option>
                <option value="1336">1336</option>
                <option value="1337">1337</option>
                <option value="1338">1338</option>
                <option value="1339">1339</option>
                <option value="1340">1340</option>
                <option value="1341">1341</option>
                <option value="1342">1342</option>
                <option value="1343">1343</option>
                <option value="1344">1344</option>
                <option value="1345">1345</option>
                <option value="1346">1346</option>
                <option value="1347">1347</option>
                <option value="1348">1348</option>
                <option value="1349">1349</option>
                <option value="1350">1350</option>
                <option value="1351">1351</option>
                <option value="1352">1352</option>
                <option value="1353">1353</option>
                <option value="1354">1354</option>
                <option value="1355">1355</option>
                <option value="1356">1356</option>
                <option value="1357">1357</option>
                <option value="1358">1358</option>
                <option value="1359">1359</option>
                <option value="1360">1360</option>
                <option value="1361">1361</option>
                <option value="1362">1362</option>
                <option value="1363">1363</option>
                <option value="1364">1364</option>
                <option value="1365">1365</option>
                <option value="1366">1366</option>
                <option value="1367">1367</option>
                <option value="1368">1368</option>
                <option value="1369">1369</option>
                <option value="1370">1370</option>
                <option value="1371">1371</option>
                <option value="1372">1372</option>
                <option value="1373">1373</option>
                <option value="1374">1374</option>
                <option value="1375">1375</option>
                <option value="1376">1376</option>
                <option value="1377">1377</option>
                <option value="1378">1378</option>
                <option value="1379">1379</option>
                <option value="1380">1380</option>
                <option value="1381">1381</option>
                <option value="1382">1382</option>
                <option value="1383">1383</option>
                <option value="1384">1384</option>
                <option value="1385">1385</option>
                <option value="1386">1386</option>
                <option value="1387">1387</option>
                <option value="1388">1388</option>
                <option value="1389">1389</option>
                <option value="1390">1390</option>
                <option value="1391">1391</option>
                <option value="1392">1392</option>
                <option value="1393">1393</option>
                <option value="1394">1394</option>
                <option value="1395">1395</option>
                <option value="1396">1396</option>
                <option value="1397">1397</option>
                <option value="1398">1398</option>
                <option value="1399">1399</option>
                <option value="1400">1400</option>
                <option value="1401">1401</option>
                <option value="1402">1402</option>
                <option value="1403">1403</option>
                <option value="1404">1404</option>
                <option value="1405">1405</option>
                <option value="1406">1406</option>
              </select>
              {/* m */}
              <select
                name=""
                id=""
                className="text-xs xs:text-base outline-none px-1 py-3 border border-primryGray/50 w-[80%] rounded-md"
              >
                <option value="-1">انتخاب ماه</option>
                <option value="1">فروردین</option>
                <option value="2">اردیبهشت</option>
                <option value="3">خرداد</option>
                <option value="4">تیر</option>
                <option value="5">مرداد</option>
                <option value="6">شهریور</option>
                <option value="7">مهر</option>
                <option value="8">ابان</option>
                <option value="9">اذر</option>
                <option value="10">دی</option>
                <option value="11">بهمن</option>
                <option value="12">اسفند</option>
              </select>
              {/* d */}
              <select
                name=""
                id=""
                className="text-xs xs:text-base outline-none px-1 py-3 border border-primryGray/50 w-[80%] rounded-md"
              >
                <option value="">انتخاب روز</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
                <option value="">13</option>
                <option value="">14</option>
                <option value="">15</option>
                <option value="">16</option>
                <option value="">17</option>
                <option value="">18</option>
                <option value="">19</option>
                <option value="">20</option>
                <option value="">21</option>
                <option value="">22</option>
                <option value="">23</option>
                <option value="">24</option>
                <option value="">25</option>
                <option value="">26</option>
                <option value="">27</option>
                <option value="">28</option>
                <option value="">29</option>
                <option value="">30</option>
                <option value="">31</option>
              </select>
            </div>
            {/* email and phone */}
            <div className="w-full flex justify-between my-2 items-center">
              <input
                className="w-[49%] border border-primryGray/50 py-3 px-1 rounded-md outline-none"
                type="text"
                placeholder="شماره موبایل"
              />
              <input
                className="w-[49%] border border-primryGray/50 py-3 px-1 rounded-md outline-none"
                type="text"
                placeholder="ایمیل"
              />
            </div>
            {/* password */}
            <div className="w-full flex justify-between my-2 items-center">
              <input
                className="w-[49%] border border-primryGray/50 py-3 px-1 rounded-md outline-none"
                type="text"
                placeholder="رمز ورود"
              />
              <input
                className="w-[49%] border border-primryGray/50 py-3 px-1 rounded-md outline-none"
                type="text"
                placeholder="تکرار رمز ورود"
              />
            </div>
          </div>
          {/* show password */}
          <div className="flex items-center gap-x-2 border border-primryGray/50 rounded-md w-[50%] py-3 px-1 my-2">
            <input type="checkbox" name="" id="show-password" />
            <label htmlFor="show-password">نمایش رمز ورود</label>
          </div>
          {/* tip */}
          <div className="text-xs text-red-600 py-2">
            حداقل ۶ کاراکتر به دلخواه
          </div>
          {/* buttons */}
          <div className="w-[100%]">
            <button className="text-white bg-primryGreen hover:bg-green-800 py-3 rounded-lg w-full transition-colors duration-500">
              ثبت نام
            </button>
          </div>
        </form>
        {/* login */}
        <div className="py-4">
          <p>
            اگر قبلا ثبت نام کرده اید،{" "}
            <span className="text-primryCream2 font-bold">وارد</span> شوید
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
