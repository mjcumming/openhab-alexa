/**
 * Copyright (c) 2010-2021 Contributors to the openHAB project
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 */

const { Capability, Property } = require('@alexa/smarthome/constants');
const EqualizerBands = require('@alexa/smarthome/properties/equalizerBands');
const DeviceAttribute = require('./attribute');

/**
 * Defines equalizer band bass attribute class
 * @extends DeviceAttribute
 */
class EqualizerBass extends DeviceAttribute {
  /**
   * Returns supported names
   * @return {Array}
   */
  static get supportedNames() {
    return ['EqualizerBass'];
  }

  /**
   * Returns capabilities
   * @return {Array}
   */
  static getCapabilities() {
    return [
      {
        name: Capability.EQUALIZER_CONTROLLER,
        property: Property.EQUALIZER_BANDS,
        component: EqualizerBands.BASS
      }
    ];
  }
}

module.exports = EqualizerBass;
