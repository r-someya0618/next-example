// APIを作成するときはroute.tsとする

import { NextResponse } from 'next/server'

// リクエストに対応して実行される(ルートハンドラー)
export interface Task {
  id: number
  name: string
}

const tasks: Task[] = [
  { id: 1, name: 'プログラミング' },
  { id: 2, name: 'ランニング' },
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// 通常は静的な要素としてビルドされるので、ビルド時に取得するデータが決まる
export const GET = async () => {
  await sleep(3000)
  return NextResponse.json(
    { tasks },
    {
      status: 200,
    }
  )
}

// リクエスト毎に動的に実行(root segment config)
// export const dynamic = 'force-dynamic'
