import React, { useState, useEffect } from 'react'

export const useImgLoader = (url: string, deps: any[] = []) => {
  const [data, updateData] = useState(null)
  const [loading,updateLoading] = useState(false)

  useEffect(()=> {
    if(loading) return
    updateLoading(true)
    fetch(url).then(res => {
      return res.json();
    }).then(res => {
      updateData(res)
      updateLoading(false)
    })
  }, deps)
  return [data, loading]
}