import React, { useEffect } from "react";
import {Adsense} from '@ctrl/react-adsense';

export default function Ads() {
//  useEffect(()=>{
//     try{
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }catch(e){
//         console.error(e)
//     }
//  })
  return (
    <div className="m-5">

    <Adsense
  client="ca-pub-7640562161899788"
  slot="7259870550"
  style={{ display: 'block' ,border:'dotted'}}
  layout="in-article"
  format="fluid"
/>
    </div>
  );
}
