import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GobalStyle } from './styles/globo'

import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  //inicia o modal como false pq seu estado inicial é fechado
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  //inicio a funcao com "handle" sempre que usario vai clicar ou executar algo para chama-la
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GobalStyle />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onResquestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}
