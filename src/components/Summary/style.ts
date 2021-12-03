import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: var(--text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 2rem;
    }

    &.Total {
      background: var(--green);
      color: var(--shape);
    }

  }

`