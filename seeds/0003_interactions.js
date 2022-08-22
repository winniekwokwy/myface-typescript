const { format, parse, isAfter, addMinutes } = require("date-fns");

function randomInt(min = 0, max = 1) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}

function randomInteraction(post) {
  const postDate = parse(post.createdAt, "yyyy-MM-dd HH:mm:ss", new Date());
  const interactionDate = addMinutes(postDate, randomInt(0, 1000));
  const interactionType = ["LIKE", "LIKE", "DISLIKE"][randomInt(0, 2)];

  return {
    interactionType: interactionType,
    date: format(interactionDate, "yyyy-MM-dd HH:mm:ss"),
    userId: randomInt(1, 100),
    postId: post.id,
  };
}

function generateInteractions(post, number) {
  const interactions = [];
  for (let i = 0; i < number; i++) {
    const newInteraction = randomInteraction(post);

    if (interactions.some((i) => i.userId === newInteraction.userId)) {
      continue;
    }
    
    const newInteractionDate = parse(newInteraction.date, "yyyy-MM-dd HH:mm:ss", new Date());
    if (isAfter(newInteractionDate, new Date())) {
      continue;
    }

    interactions.push(newInteraction);
  }
  return interactions;
}

exports.seed = async function (knex) {
  await knex("interactions").del();

  const posts = await knex("posts").select("*");

  for (const post of posts) {
    const interactions = generateInteractions(post, randomInt(0, 20));
    if (interactions.length > 0) {
      await knex("interactions").insert(interactions);
    }
  }
};
