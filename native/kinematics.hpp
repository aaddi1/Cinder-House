#ifndef KINEMATICS_HPP
#define KINEMATICS_HPP

namespace CinderPhysics {

struct Vector3D {
    float x, y, z;
    Vector3D(float _x = 0, float _y = 0, float _z = 0) : x(_x), y(_y), z(_z) {}
};

inline Vector3D lerpVector(const Vector3D& a, const Vector3D& b, float t) {
    return Vector3D(
        a.x + (b.x - a.x) * t,
        a.y + (b.y - a.y) * t,
        a.z + (b.z - a.z) * t
    );
}

} // namespace CinderPhysics

#endif // KINEMATICS_HPP
