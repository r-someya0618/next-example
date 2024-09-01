import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
  console.log('middleware')

  // 次の処理へ移行させる
  return NextResponse.next()
}

// matcherでミドルウェアを対応させるページを設定できる
export const config = {
  matcher: ['/', '/task'],
}
