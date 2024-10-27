"use client"

import React, { useState } from 'react'
import SNSMainComponent from '@/components/features/index/SNSComponent'
import Sidebar from '@/components/parts/Sidebar'
import { Button } from '@/components/ui/button'

export default function TestPage() {
  const [isShow, setisShow] = useState(false)

  function convertColor(happy: number, healing: number, negative: number, amusing: number) {
    const res = cmykToRgb(healing, happy, amusing, negative)
    console.log(res)
    console.log(rgbToHex(res.r, res.g, res.b))
    return rgbToHex(res.r, res.g, res.b)
  }

  const cmykToRgb = (c: number, m: number, y: number, k: number) => {
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);
    return {
      r: Math.round(r),
      g: Math.round(g),
      b: Math.round(b),
    };
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return `#${[r, g, b]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')}`;
  };

  const dummy_data = {content: "text",
                      nick_name: "nick_name",
                      happy: 1,
                      healing: 12,
                      amusing: 0,
                      negative: 0}

  return (
    <div className="flex min-h-screen min-w-full">
      <Sidebar />
      <div className="flex flex-col justify-center items-center w-full bg-gradient-to-tr from-gray-500 via-gray-700 to-gray-600">
        <div className="text-2xl mb-3 text-white font-bold">レターが届きました</div>
        {
          isShow ?
          <div className="flex flex-col items-center">
            <div className="flex w-[600px] h-[200px] bg-gray-800 rounded-lg">
              <div className="ml-1 min-w-1 bg-red-500"></div>
              <div className="relative p-4 text-white">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full mr-1 bg-gray-500"></div>
                  <p className="font-bold mr-1">Username</p>
                  <p className="text-sm">@dummy_user</p>
                </div>
                <div className="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>
                <div className="absolute bottom-4 left-4">
                  <Button variant="ghost" className="rounded-full border h-6 w-6 p-1 mr-4">
                  😃
                  </Button>
                  <Button variant="ghost" className="rounded-full border h-6 w-6 p-1 mr-4">
                  😆
                  </Button>
                  <Button variant="ghost" className="rounded-full border h-6 w-6 p-1">
                  😊
                  </Button>
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            <div className="relative flex justify-center items-center w-[600px] h-[200px] rounded-lg bg-slate-800 text-white">
              <div className={`absolute top-0 left-2 h-full w-2 bg-red-500
                `}>
              </div>
              <div>
                <Button variant="outline" className="bg-slate-600/40 w-24 mr-2" onClick={() => setisShow(true)}>
                  読む
                </Button>
                <Button variant="outline" className="bg-slate-600/40 w-24 ml-2">
                  読まない
                </Button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
