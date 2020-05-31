'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  '* * * * * *': async () => {
    console.log("Cron every second")


    const send = await strapi.plugins['email'].services.email.send({
      to: 'mvjvvknemredfsaetn@awdrt.org',
      from: 'demo@strapi.io',
      replyTo: 'demo@strapi.io',
      subject: 'Sent from a cron',
      text: 'Hello world!',
      html: 'Hello world!',
    });

    console.log("send", send)
  }
};
