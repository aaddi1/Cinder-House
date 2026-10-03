/**
 * Cinder House — 3D Kinematics & Convection Physics Solver
 * High-performance vector math routines for GPU particle systems
 * Author: Aryan Sharma <aaddisharmarkczw@gmail.com>
 * Location: Tundla, Uttar Pradesh, India 283204
 */

#include <iostream>
#include <vector>
#include <cmath>
#include <random>
#include "kinematics.hpp"

namespace CinderPhysics {

struct Particle {
    float x, y, z;
    float vx, vy, vz;
    float life;
    float flickerPhase;
    float size;
};

class EmberConvectionSolver {
private:
    std::vector<Particle> particles;
    size_t particleCount;
    float boundingBoxWidth;
    float boundingBoxHeight;
    float boundingBoxDepth;

public:
    EmberConvectionSolver(size_t count = 260, float w = 22.0f, float h = 16.0f, float d = 18.0f)
        : particleCount(count), boundingBoxWidth(w), boundingBoxHeight(h), boundingBoxDepth(d) {
        particles.resize(particleCount);
        resetAll();
    }

    void resetParticle(Particle& p) {
        static std::random_device rd;
        static std::mt19937 gen(rd());
        std::uniform_real_distribution<float> disX(-boundingBoxWidth / 2.0f, boundingBoxWidth / 2.0f);
        std::uniform_real_distribution<float> disY(-boundingBoxHeight / 2.0f, boundingBoxHeight / 2.0f);
        std::uniform_real_distribution<float> disZ(-boundingBoxDepth / 2.0f, boundingBoxDepth / 2.0f);
        std::uniform_real_distribution<float> disSpeed(0.008f, 0.024f);
        std::uniform_real_distribution<float> disPhase(0.0f, 6.2831853f);

        p.x = disX(gen);
        p.y = disY(gen);
        p.z = disZ(gen);
        p.vx = (disX(gen) / boundingBoxWidth) * 0.002f;
        p.vy = disSpeed(gen);
        p.vz = (disZ(gen) / boundingBoxDepth) * 0.002f;
        p.life = 1.0f;
        p.flickerPhase = disPhase(gen);
        p.size = 0.32f;
    }

    void resetAll() {
        for (auto& p : particles) {
            resetParticle(p);
        }
    }

    void stepSimulation(float dt = 0.016f) {
        for (auto& p : particles) {
            p.y += p.vy;
            p.x += std::sin(p.flickerPhase) * 0.003f;
            p.flickerPhase += 0.05f;

            if (p.y > (boundingBoxHeight / 2.0f)) {
                p.y = -boundingBoxHeight / 2.0f;
            }
        }
    }

    const std::vector<Particle>& getParticles() const {
        return particles;
    }
};

} // namespace CinderPhysics
