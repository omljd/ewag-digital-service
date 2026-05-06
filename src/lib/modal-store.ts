// Simple singleton state for the modal
let modalTrigger: (open: boolean) => void = () => {};

export const setModalTrigger = (fn: (open: boolean) => void) => {
  modalTrigger = fn;
};

export const openConsultationModal = () => {
  modalTrigger(true);
};
