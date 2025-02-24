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

module.exports = {
  description: 'automobile',
  items: [
    {
      type: 'Group',
      name: 'gAutomobile',
      label: 'Automobile',
      metadata: {
        alexa: {
          value: 'Automobile'
        }
      },
      members: [
        {
          type: 'Number:Dimensionless',
          name: 'batteryLevel',
          metadata: {
            alexa: {
              value: 'BatteryLevel'
            }
          }
        },
        {
          type: 'Number:Temperature',
          name: 'temperature',
          metadata: {
            alexa: {
              value: 'CurrentTemperature'
            }
          }
        },
        {
          type: 'Number:Temperature',
          name: 'targetTemperature',
          metadata: {
            alexa: {
              value: 'TargetTemperature'
            }
          }
        }
      ]
    }
  ],
  catalog: {
    '@Setting.BatteryLevel': [
      {
        text: 'Battery Level',
        locale: 'en-US'
      }
    ],
    '@Setting.TargetTemperature': [
      {
        text: 'Target Temperature',
        locale: 'en-US'
      }
    ]
  },
  expected: {
    gAutomobile: {
      capabilities: [
        'Alexa.RangeController:BatteryLevel.rangeValue',
        'Alexa.RangeController:Temperature.rangeValue',
        'Alexa.RangeController:TargetTemperature.rangeValue',
        'Alexa.EndpointHealth.connectivity',
        'Alexa'
      ],
      displayCategories: ['VEHICLE'],
      friendlyName: 'Automobile',
      propertyFlags: {
        'Alexa.RangeController:BatteryLevel': {
          proactivelyReported: false,
          retrievable: true,
          nonControllable: true
        },
        'Alexa.RangeController:Temperature': {
          proactivelyReported: false,
          retrievable: true,
          nonControllable: true
        },
        'Alexa.RangeController:TargetTemperature': {
          proactivelyReported: false,
          retrievable: true,
          nonControllable: false
        }
      },
      resources: {
        'Alexa.RangeController:BatteryLevel': {
          friendlyNames: ['text:Battery Level:en-US']
        },
        'Alexa.RangeController:Temperature': {
          friendlyNames: ['asset:Alexa.Setting.Temperature']
        },
        'Alexa.RangeController:TargetTemperature': {
          friendlyNames: ['text:Target Temperature:en-US']
        }
      },
      configuration: {
        'Alexa.RangeController:BatteryLevel': {
          supportedRange: { minimumValue: 0, maximumValue: 100, precision: 1 },
          unitOfMeasure: 'Alexa.Unit.Percent'
        },
        'Alexa.RangeController:Temperature': {
          supportedRange: { minimumValue: -50, maximumValue: 100, precision: 0.5 },
          unitOfMeasure: 'Alexa.Unit.Temperature.Celsius'
        },
        'Alexa.RangeController:TargetTemperature': {
          supportedRange: { minimumValue: 4, maximumValue: 32, precision: 0.5 },
          unitOfMeasure: 'Alexa.Unit.Temperature.Celsius'
        }
      }
    }
  }
};
