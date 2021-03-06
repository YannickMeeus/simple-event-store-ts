import { Guard } from './errors/Guard'

/**
 * This class is your primary interaction data model with the EventStore itself.
 * It is the envelope of data that is stored in the event store, and will be what
 * any queries will return when reading a particular stream.
 *
 * @class EventData
 */
class EventData {
  /**
   * Creates an instance of EventData.
   * @param {string} eventId The unique identifier for this event.
   * This should be truly unique (any UUID/GUID will usually do)
   * @param {*} body The event itself, this represents your domain
   * event that needs persisting
   * @param {*} [metaData=undefined] Optional. If you want to specify any
   * meta-data that is not related to the intention of the event, but rather
   * any other runtime information. Examples could include which server persisted
   * the event, or the time it was persisted.
   * @memberof EventData
   */
  constructor(
    public readonly eventId: string,
    public readonly body: unknown,
    public readonly metaData: unknown = undefined
  ) {
    Guard.againstNull('body', body)
  }
}

export { EventData }
