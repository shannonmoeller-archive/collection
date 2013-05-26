/*jshint indent:4, node:true, plusplus:false */
'use strict';

// Modules
var Model = require('model');

/**
 * A basic JavaScript model.
 * @constructor
 */
var Collection = function (raw) {
    var Model = null;

    if (!(this instanceof Collection)) {
        return new Collection(raw);
    }

    if (raw instanceof Collection) {
        raw = raw.toJSON();
    }

    Model = this.model;

    this._raw = (raw || []).map(function (data) {
        return new Model(data);
    });
};

/**
 * Model.
 *
 * @type {Model}
 * @since 0.0.1
 */
Collection.prototype.model = Model;

/**
 *
 *
 * @param {Function(Model):Boolean} filterer
 * @return {Array.<Model>}
 * @since 0.0.1
 */
Collection.prototype.filter = function (filterer) {
    return this._raw.filter(filterer);
};

/**
 *
 *
 * @param {Function(Model):*} mapper
 * @return {Array.<*>}
 * @since 0.0.1
 */
Collection.prototype.map = function (mapper) {
    return this._raw.map(mapper);
};

/**
 *
 *
 * @param {String,Array} key A single key, or a list of keys.
 * @return {Array.<*,Object>}
 * @since 0.0.1
 */
Collection.prototype.pluck = function (key) {
    return this._raw.map(function (model) {
        return model.get(key);
    });
};

/**
 *
 *
 * @return {this}
 * @since 0.0.1
 */
Collection.prototype.sort = function (sorter) {
    this._raw.sort(sorter);

    return this;
};

/**
 * Gets the raw data as a plain object.
 *
 * @return {Array.<Object>} The raw data.
 * @since 0.0.1
 */
Collection.prototype.toJSON = function () {
    return this._raw.map(function (model) {
        return model.toJSON();
    });
};

/**
 * Export.
 */
module.exports = Collection;
