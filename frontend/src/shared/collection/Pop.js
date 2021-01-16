// import { useContext } from 'react';
// import ReactDOM from 'react-dom';
// import { QuestionContext } from '../../context/QuestionContext';

// const Pop = ({ type, checkPop, forwardedRef, formId }) => {


//     const { questionTypes, developQuestion, setPopShow } = useContext(QuestionContext);
//     const setQType = (typeId) => {

//         developQuestion({ formId, typeId });
//         setPopShow(false);
//     }

//     let content;
//     if (type === "question")
//         content = (
//             <div className={(checkPop ? "block " : "hidden ") +
//                 `bg-white shadow-lg p-2 z-50 center mt-1 rounded`} ref={forwardedRef}
//                 style={{ minWidth: "20rem" }}
//             >
//                 <h3 className="text-center px-6 py-3 text-xl">Choose Question Type</h3>
//                 <hr />
//                 <div className="">
//                     {questionTypes.map((qt, index) =>
//                         <div key={index} onClick={() => setQType(qt.typeId)} className="cursor-pointer flex space-x-4 border-r-2 border-b-2 border-l-2 items-center hover:bg-gray-200">
//                             <div className="border-r-2 p-2 border-gray-100">
//                                 {qt.type === "text" && <svg className="w-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect height="32" width="32" fill="transparent" rx="3"></rect><path d="M6 12H26V20H6V12Z" stroke="#63686F"></path><line stroke="#63686F" x1="19.5" x2="19.5" y1="8" y2="24"></line><line stroke="#63686F" x1="17" x2="22" y1="8.5" y2="8.5"></line><line stroke="#63686F" x1="17" x2="22" y1="23.5" y2="23.5"></line></svg>}
//                                 {qt.type === "single" && <svg className="w-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect height="32" width="32" fill="transparent" rx="3"></rect><g clipPath="url(#clip0)"><path d="M7.05263 6.90909V25.0909" stroke="#63686F" strokeLinecap="round" strokeWidth="1"></path><path d="M11.7895 8.72727H24.4211" stroke="#63686F" strokeLinecap="round" strokeWidth="1"></path><path d="M11.7895 16H24.4211" stroke="#63686F" strokeLinecap="round" strokeWidth="1"></path><path d="M11.7895 23.2727H24.4211" stroke="#63686F" strokeLinecap="round" strokeWidth=""></path></g><defs><clipPath id="clip0"><rect height="20" width="20" fill="white" x="6" y="6"></rect></clipPath></defs></svg>}
//                                 {qt.type === "multiple" && <svg className="w-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect height="32" width="32" fill="transparent" rx="3"></rect><path d="M10.5981 8.49989C9.1632 7.67147 7.32843 8.16309 6.5 9.59797C5.67157 11.0328 6.1632 12.8676 7.59808 13.696C9.03295 14.5245 10.8677 14.0328 11.6962 12.598" stroke="#63686F"></path><path d="M10.5981 19.4999C9.1632 18.6715 7.32843 19.1631 6.5 20.598C5.67157 22.0328 6.1632 23.8676 7.59808 24.696C9.03295 25.5245 10.8677 25.0328 11.6962 23.598" stroke="#63686F"></path><line stroke="#63686F" x1="13.915" x2="25.915" y1="9.63379" y2="9.63379"></line><line stroke="#63686F" x1="13.915" x2="21.915" y1="11.6338" y2="11.6338"></line><line stroke="#63686F" x1="13.915" x2="25.915" y1="20.6338" y2="20.6338"></line><line stroke="#63686F" x1="13.915" x2="21.915" y1="22.6338" y2="22.6338"></line></svg>}
//                                 {qt.type === "star" && <svg className="w-8 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                                 </svg>}
//                                 {qt.type === "yn" && <svg className="w-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect height="32" width="32" fill="transparent" rx="3"></rect><path d="M7 23.2815C7.18674 23.3774 7.37412 23.4727 7.56214 23.5674C11.0274 25.3186 10.8578 24.9775 13.8247 24.9775C15.0633 24.9775 15.6931 24.1714 16.059 22.9909V22.9833L16.9594 19.9782V19.9725C17.0022 19.8317 17.0113 19.6828 16.9861 19.5378C16.9608 19.3928 16.9019 19.2558 16.814 19.1377C16.7262 19.0196 16.6118 18.9238 16.4802 18.858C16.3486 18.7922 16.2033 18.7581 16.0561 18.7587H13.7409C13.5967 18.7583 13.4544 18.7252 13.3248 18.6618C13.1953 18.5984 13.0818 18.5064 12.993 18.3928C12.9047 18.2791 12.8438 18.1464 12.8152 18.0053C12.7867 17.8642 12.7911 17.7183 12.8281 17.5792L13.2445 16.008C13.2769 15.886 13.2798 15.7581 13.2532 15.6347C13.2265 15.5113 13.171 15.396 13.0911 15.2982C13.0122 15.2015 12.912 15.1243 12.7984 15.0727C12.6847 15.021 12.5607 14.9963 12.4359 15.0004C12.3112 15.0046 12.1891 15.0375 12.0791 15.0966C11.9691 15.1557 11.8743 15.2393 11.802 15.3411L9.49341 18.8902C9.40543 19.0128 9.28959 19.1127 9.15541 19.1818C9.02124 19.2509 8.87258 19.2871 8.72167 19.2875H7" stroke="#63686F" strokeLinecap="round"></path><path d="M6 18.5H7V25.5H6" stroke="#63686F"></path><path d="M24.4956 8.22226C24.3089 8.12639 24.1215 8.03115 23.9335 7.93655C20.4682 6.18609 20.6378 6.52704 17.6709 6.52704C16.4323 6.52704 15.8025 7.33274 15.4366 8.51273L15.4366 8.52035L14.5362 11.5241L14.5362 11.5298C14.4934 11.6706 14.4843 11.8194 14.5095 11.9644C14.5348 12.1093 14.5937 12.2463 14.6816 12.3643C14.7694 12.4823 14.8838 12.5781 15.0154 12.6439C15.147 12.7097 15.2923 12.7437 15.4395 12.7432L17.7547 12.7432C17.8989 12.7436 18.0412 12.7767 18.1708 12.84C18.3003 12.9034 18.4138 12.9953 18.5026 13.1089C18.5909 13.2226 18.6518 13.3551 18.6804 13.4962C18.709 13.6373 18.7045 13.7831 18.6675 13.9222L18.2511 15.4926C18.2187 15.6146 18.2158 15.7425 18.2424 15.8658C18.2691 15.9892 18.3246 16.1044 18.4045 16.2022C18.4834 16.2988 18.5836 16.376 18.6972 16.4276C18.8109 16.4792 18.9349 16.5039 19.0597 16.4998C19.1844 16.4956 19.3066 16.4628 19.4165 16.4037C19.5265 16.3446 19.6213 16.261 19.6936 16.1593L22.0022 12.6117C22.0902 12.4892 22.206 12.3893 22.3402 12.3202C22.4744 12.2512 22.623 12.215 22.7739 12.2146L24.4956 12.2146" stroke="#63686F" strokeLinecap="round"></path><path d="M25.4956 13.0002L24.4956 13.0002L24.4956 6.00024L25.4956 6.00024" stroke="#63686F"></path></svg>}
//                             </div>
//                             <div className="pr-2">
//                                 <span className="text-lg"> {qt.label}</span>
//                                 <p className="text-xs tracking-wide">{qt.desc}</p>
//                             </div>

//                         </div>)}
//                 </div>
//             </div>
//         )
//     return ReactDOM.createPortal(

//         content, document.getElementById('pop-hook')
//     )
// }
// export default Pop;