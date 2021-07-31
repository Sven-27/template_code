import { useEffect, useRef } from 'react'

// interface IInterval {
//   callback: any,
//   delay: number
// }

export function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick(){
      savedCallback.current()
    }
    if(delay === null){
      const id = setInterval(tick, delay)
      return () => {
        clearInterval(id)
      }
    }
  }, [callback, delay])
}
