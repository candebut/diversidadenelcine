import { Widget } from '@typeform/embed-react'
import { PopupButton } from '@typeform/embed-react'

const JoinSection = () => {
    return (
        <div className='join-us'>
            <h3>¿Querés sumarte a nosotrxs?</h3>
            ¡Estamos buscando voluntarixs que quieran colaborar con los procesos de investigación!
            <PopupButton className='popup-button' id="HQVXJ8Fb" style={{ fontSize: 20 }} whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                ¡Sumate a colaborar!
            </PopupButton>
        </div>
    )
}
export default JoinSection;