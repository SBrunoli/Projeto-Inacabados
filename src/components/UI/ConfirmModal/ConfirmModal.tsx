import { useState } from "react";
import styles from "./ConfirmModal.module.css";
import type { Project } from "../../../types/Project"; 

interface ConfirmModalProps {
  project: Project;
  closeModal: () => void;
}

function ConfirmModal({ project, closeModal }: ConfirmModalProps) {
  const [confirm, setConfirm] = useState(false);

  //quando chamado seta o confirm como true, fazendo com que apareça a tela de parabéns
  function confirmProject() {
    setConfirm(true);
  }

  //retorna o confirma para o estado de null novamente
  function closeConfirm() {
    setConfirm(false);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* confere se confirm foi clicado, caso sim, retorna tela de parabéns */}
        {!confirm ? (
          <>
            <h3 className={`accent ${styles.modal__title}`}>Confirmar adoção</h3>
            <p className={styles.modal__message}>
              Você quer adotar o projeto "{project.title}"?
            </p>
            <p className={styles.modal__reason}>{project.reason}</p>
            <div className={styles.modal__actions}>
              <button
                className="btn btn__primary"
                onClick={() => confirmProject()}
              >
                Confirmar
              </button>
              <button onClick={closeModal} className="btn btn__transparent">
                Cancelar
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className={styles.modal__message}>
              Parabéns, você adotou um novo{" "}
              <span className="accent">projeto</span>
            </h3>

            <div className={styles.modal__actions}>
              <button
                onClick={() => {
                  closeConfirm();
                  closeModal();
                }}
                className="btn btn__primary"
              >
                Prosseguir
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ConfirmModal;
