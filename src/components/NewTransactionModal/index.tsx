import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeIgm from '../../assets/income.svg'
import outcomeIgm from '../../assets/outcome.svg'
import { api } from '../../services/api'

import { Container, TransactionTypeContainer, RadioBox } from './style'

interface NewTransactionModalProps {
  isOpen: boolean
  onResquestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onResquestClose
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, SetValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onResquestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onResquestClose}
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => SetValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit')
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIgm} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIgm} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="string"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
