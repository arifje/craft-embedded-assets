import Emitter from './Emitter'
import Modal from './Modal'

export default class EmbeddedAssets extends Emitter {
  constructor () {
    super()

    this._currentGetActionTarget = () => -1

    this.modal = new Modal(() => this._getActionTarget())
    this.buttons = []

    this.modal.on('hide', () => this.buttons.forEach(b => b.setActive(false)))
    this.modal.on('save', e => this.trigger('save', e))
  }

  destroy () {
    this.modal.destroy()
    this.modal = null

    this.trigger('destroy')
  }

  setReplaceAssetId (id) {
    this._replaceAssetId = id
  }

  addButton (button, orientations = ['bottom', 'top', 'left', 'right'], getActionTarget = () => {}, replace = false) {
    this.buttons.push(button)

    button.$element.on('click', () => {
      if (this.modal) {
        this._currentGetActionTarget = getActionTarget

        this.buttons.forEach(b => b.setActive(b === button))
        this.modal.show(button.$element, { orientations }, replace)
        this.modal.form.setReplace(replace, this._replaceAssetId)
      }
    })

    this.trigger('addButton', { button })
  }

  removeButton (button) {
    this.buttons = this.buttons.filter(b => b !== button)

    this.trigger('removeButton', { button })
  }

  _getActionTarget () {
    return this._currentGetActionTarget()
  }
}
