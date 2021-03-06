/*
    Copyright Sergio García <s3rgio.gr gmail com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';


// Private stuff

var dns = require('dns-axfr'),

    HELP = {
        description: 'DNS zone transfer',
        options: {
            domain: {
                type: 'domain',
                description: 'Domain to explore',
                defaultValue: 'acme.com'
            },
            server: {
                // TODO
                type: 'allValid',
                description: 'Server to use',
                defaultValue: 'dns01.acme.com'
            }
        }
    };


// Public stuff

module.exports.help = HELP;

module.exports.run = function (options, callback) {
    dns.resolveAxfr(options.server, options.domain, callback);
};
