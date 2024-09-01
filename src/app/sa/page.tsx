'use client'
import { createTask } from '@/actions/sampleActions'
// useFormState => server actionsが返す値をクライアント側でstateとして扱える
// useFormStatus => server actionsの状態を取得する
import { useFormState, useFormStatus } from 'react-dom'

const ServerActionsPage = () => {
  const taskId = 1
  // bindでフォーム外の値を送信することも可能
  const createTaskWithId = createTask.bind(null, taskId)
  const initialState = { error: '' }
  // state => server Actionsからの戻り値
  // formAction => server Actionsの関数
  const [state, formAction] = useFormState(createTaskWithId, initialState)

  const SubmitButton = () => {
    // 注：Formが定義されたコンポーネント直下で使用しても期待通りに動作しないため別コンポーネントにする
    const { pending } = useFormStatus()
    return (
      <button
        type='submit'
        className='bg-gray-400 ml-2 px-2 disabled:bg-gray-300'
        disabled={pending}
      >
        送信
      </button>
    )
  }

  return (
    <div>
      <form action={formAction}>
        <input type='text' id='name' name='name' className='bg-gray-200' />
        <SubmitButton />
      </form>
      <div>{state.error}</div>
    </div>
  )
}

export default ServerActionsPage
