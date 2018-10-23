export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const displaychange = () => ({
  type: 'DISPLAYCHANGE'
});

export const onnumberchange = (number) => ({
  type: 'ONNUMBERCHANGE', number
})
